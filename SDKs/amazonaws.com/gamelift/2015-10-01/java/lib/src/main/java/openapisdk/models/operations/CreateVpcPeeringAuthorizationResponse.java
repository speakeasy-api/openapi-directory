package openapisdk.models.operations;



public class CreateVpcPeeringAuthorizationResponse {
    public String contentType;
    public CreateVpcPeeringAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVpcPeeringAuthorizationOutput createVpcPeeringAuthorizationOutput;
    public CreateVpcPeeringAuthorizationResponse withCreateVpcPeeringAuthorizationOutput(openapisdk.models.shared.CreateVpcPeeringAuthorizationOutput createVpcPeeringAuthorizationOutput) {
        this.createVpcPeeringAuthorizationOutput = createVpcPeeringAuthorizationOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateVpcPeeringAuthorizationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateVpcPeeringAuthorizationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public CreateVpcPeeringAuthorizationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateVpcPeeringAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateVpcPeeringAuthorizationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}