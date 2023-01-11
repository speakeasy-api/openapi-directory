package openapisdk.models.operations;



public class DeleteServiceResponse {
    public String contentType;
    public DeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteServiceResponse deleteServiceResponse;
    public DeleteServiceResponse withDeleteServiceResponse(openapisdk.models.shared.DeleteServiceResponse deleteServiceResponse) {
        this.deleteServiceResponse = deleteServiceResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteServiceResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteServiceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public DeleteServiceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}