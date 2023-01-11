import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReservedInstancesModificationsResult
/** 
 * Contains the output of DescribeReservedInstancesModifications.
**/
export class DescribeReservedInstancesModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  reservedInstancesModifications?: Record<string, any>;
}
