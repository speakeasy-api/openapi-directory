import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecurringChargeList
/** 
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. 
**/
export class RecurringChargeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
