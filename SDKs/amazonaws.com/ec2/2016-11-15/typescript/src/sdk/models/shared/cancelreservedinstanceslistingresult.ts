import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelReservedInstancesListingResult
/** 
 * Contains the output of CancelReservedInstancesListing.
**/
export class CancelReservedInstancesListingResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedInstancesListings?: Record<string, any>;
}
