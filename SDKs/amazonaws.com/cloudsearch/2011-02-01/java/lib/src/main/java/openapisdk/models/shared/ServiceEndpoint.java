package openapisdk.models.shared;



/**
 * ServiceEndpoint
 * The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>.
**/
public class ServiceEndpoint {
    public String arn;
    public ServiceEndpoint withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String endpoint;
    public ServiceEndpoint withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}