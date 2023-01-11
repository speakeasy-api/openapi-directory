package openapisdk.models.operations;



public class DeleteDocumentClassifierResponse {
    public String contentType;
    public DeleteDocumentClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDocumentClassifierResponse;
    public DeleteDocumentClassifierResponse withDeleteDocumentClassifierResponse(java.util.Map<String, Object> deleteDocumentClassifierResponse) {
        this.deleteDocumentClassifierResponse = deleteDocumentClassifierResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteDocumentClassifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteDocumentClassifierResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteDocumentClassifierResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDocumentClassifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public DeleteDocumentClassifierResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteDocumentClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteDocumentClassifierResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}