package openapisdk.models.operations;



public class CreateVpcPeeringConnectionResponse {
    public String contentType;
    public CreateVpcPeeringConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createVpcPeeringConnectionOutput;
    public CreateVpcPeeringConnectionResponse withCreateVpcPeeringConnectionOutput(java.util.Map<String, Object> createVpcPeeringConnectionOutput) {
        this.createVpcPeeringConnectionOutput = createVpcPeeringConnectionOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateVpcPeeringConnectionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateVpcPeeringConnectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public CreateVpcPeeringConnectionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateVpcPeeringConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateVpcPeeringConnectionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}