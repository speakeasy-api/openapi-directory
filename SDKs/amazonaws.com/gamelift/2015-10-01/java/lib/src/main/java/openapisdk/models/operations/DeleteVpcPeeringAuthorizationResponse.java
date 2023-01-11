package openapisdk.models.operations;



public class DeleteVpcPeeringAuthorizationResponse {
    public String contentType;
    public DeleteVpcPeeringAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteVpcPeeringAuthorizationOutput;
    public DeleteVpcPeeringAuthorizationResponse withDeleteVpcPeeringAuthorizationOutput(java.util.Map<String, Object> deleteVpcPeeringAuthorizationOutput) {
        this.deleteVpcPeeringAuthorizationOutput = deleteVpcPeeringAuthorizationOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteVpcPeeringAuthorizationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteVpcPeeringAuthorizationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteVpcPeeringAuthorizationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteVpcPeeringAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteVpcPeeringAuthorizationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}