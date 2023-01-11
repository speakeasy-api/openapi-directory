import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";



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
  multiAZ?: boolean;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringChargeList })
  recurringCharges?: RecurringChargeList[];

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
