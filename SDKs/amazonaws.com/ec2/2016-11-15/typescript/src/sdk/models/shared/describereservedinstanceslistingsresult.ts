import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReservedInstancesListingsResult
/** 
 * Contains the output of DescribeReservedInstancesListings.
**/
export class DescribeReservedInstancesListingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstancesListings?: Record<string, any>;
}
