import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReservedInstancesOfferingsResult
/** 
 * Contains the output of DescribeReservedInstancesOfferings.
**/
export class DescribeReservedInstancesOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  reservedInstancesOfferings?: Record<string, any>;
}
