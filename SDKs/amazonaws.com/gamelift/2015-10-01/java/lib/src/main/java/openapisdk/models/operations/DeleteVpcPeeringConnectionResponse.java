package openapisdk.models.operations;



public class DeleteVpcPeeringConnectionResponse {
    public String contentType;
    public DeleteVpcPeeringConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteVpcPeeringConnectionOutput;
    public DeleteVpcPeeringConnectionResponse withDeleteVpcPeeringConnectionOutput(java.util.Map<String, Object> deleteVpcPeeringConnectionOutput) {
        this.deleteVpcPeeringConnectionOutput = deleteVpcPeeringConnectionOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteVpcPeeringConnectionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteVpcPeeringConnectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteVpcPeeringConnectionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteVpcPeeringConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteVpcPeeringConnectionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}