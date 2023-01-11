package openapisdk.models.operations;



public class DeleteEntityRecognizerResponse {
    public String contentType;
    public DeleteEntityRecognizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEntityRecognizerResponse;
    public DeleteEntityRecognizerResponse withDeleteEntityRecognizerResponse(java.util.Map<String, Object> deleteEntityRecognizerResponse) {
        this.deleteEntityRecognizerResponse = deleteEntityRecognizerResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteEntityRecognizerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteEntityRecognizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteEntityRecognizerResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEntityRecognizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public DeleteEntityRecognizerResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteEntityRecognizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEntityRecognizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}