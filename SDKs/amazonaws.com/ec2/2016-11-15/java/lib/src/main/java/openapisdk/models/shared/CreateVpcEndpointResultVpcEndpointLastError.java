package openapisdk.models.shared;



/**
 * CreateVpcEndpointResultVpcEndpointLastError
 * The last error that occurred for VPC endpoint.
**/
public class CreateVpcEndpointResultVpcEndpointLastError {
    public java.util.Map<String, Object> code;
    public CreateVpcEndpointResultVpcEndpointLastError withCode(java.util.Map<String, Object> code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, Object> message;
    public CreateVpcEndpointResultVpcEndpointLastError withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
}