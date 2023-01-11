package openapisdk.models.operations;



public class CopyImageResponse {
    public String contentType;
    public CopyImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CopyImageResponse copyImageResponse;
    public CopyImageResponse withCopyImageResponse(openapisdk.models.shared.CopyImageResponse copyImageResponse) {
        this.copyImageResponse = copyImageResponse;
        return this;
    }
    public Object incompatibleImageException;
    public CopyImageResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public CopyImageResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object limitExceededException;
    public CopyImageResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CopyImageResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotAvailableException;
    public CopyImageResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public CopyImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CopyImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}