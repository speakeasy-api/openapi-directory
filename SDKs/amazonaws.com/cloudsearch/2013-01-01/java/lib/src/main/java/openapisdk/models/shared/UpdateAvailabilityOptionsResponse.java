package openapisdk.models.shared;



/**
 * UpdateAvailabilityOptionsResponse
 * The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. 
**/
public class UpdateAvailabilityOptionsResponse {
    public AvailabilityOptionsStatus availabilityOptions;
    public UpdateAvailabilityOptionsResponse withAvailabilityOptions(AvailabilityOptionsStatus availabilityOptions) {
        this.availabilityOptions = availabilityOptions;
        return this;
    }
}