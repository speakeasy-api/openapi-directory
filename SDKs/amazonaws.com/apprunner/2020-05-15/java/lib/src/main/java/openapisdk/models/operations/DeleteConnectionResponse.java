package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse;
    public DeleteConnectionResponse withDeleteConnectionResponse(openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse) {
        this.deleteConnectionResponse = deleteConnectionResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteConnectionResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteConnectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}