package openapisdk.models.shared;



/**
 * ServiceEndpoint
 * The endpoint to which service requests can be submitted.
**/
public class ServiceEndpoint {
    public String endpoint;
    public ServiceEndpoint withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}