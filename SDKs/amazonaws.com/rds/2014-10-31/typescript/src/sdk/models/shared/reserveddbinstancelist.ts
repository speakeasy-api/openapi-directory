import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";



// ReservedDbInstanceList
/** 
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. 
**/
export class ReservedDbInstanceList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceCount?: number;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  leaseId?: string;

  @SpeakeasyMetadata()
  multiAZ?: boolean;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringChargeList })
  recurringCharges?: RecurringChargeList[];

  @SpeakeasyMetadata()
  reservedDBInstanceArn?: string;

  @SpeakeasyMetadata()
  reservedDBInstanceId?: string;

  @SpeakeasyMetadata()
  reservedDBInstancesOfferingId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
