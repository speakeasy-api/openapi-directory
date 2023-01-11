package openapisdk.models.shared;



/**
 * DescribeAvailabilityOptionsResponse
 * The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. 
**/
public class DescribeAvailabilityOptionsResponse {
    public AvailabilityOptionsStatus availabilityOptions;
    public DescribeAvailabilityOptionsResponse withAvailabilityOptions(AvailabilityOptionsStatus availabilityOptions) {
        this.availabilityOptions = availabilityOptions;
        return this;
    }
}