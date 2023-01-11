package openapisdk.models.shared;



/**
 * CancelReservedInstancesListingResult
 * Contains the output of CancelReservedInstancesListing.
**/
public class CancelReservedInstancesListingResult {
    public java.util.Map<String, Object> reservedInstancesListings;
    public CancelReservedInstancesListingResult withReservedInstancesListings(java.util.Map<String, Object> reservedInstancesListings) {
        this.reservedInstancesListings = reservedInstancesListings;
        return this;
    }
}