import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateReservedInstancesListingResult
/** 
 * Contains the output of CreateReservedInstancesListing.
**/
export class CreateReservedInstancesListingResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstancesListings?: Record<string, any>;
}
