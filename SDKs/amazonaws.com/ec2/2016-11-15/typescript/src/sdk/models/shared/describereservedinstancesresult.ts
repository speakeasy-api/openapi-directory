import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReservedInstancesResult
/** 
 * Contains the output for DescribeReservedInstances.
**/
export class DescribeReservedInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstances?: Record<string, any>;
}
