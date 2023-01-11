package openapisdk.models.operations;



public class StartImageBuilderResponse {
    public Object concurrentModificationException;
    public StartImageBuilderResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StartImageBuilderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleImageException;
    public StartImageBuilderResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public StartImageBuilderResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object resourceNotAvailableException;
    public StartImageBuilderResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartImageBuilderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartImageBuilderResult startImageBuilderResult;
    public StartImageBuilderResponse withStartImageBuilderResult(openapisdk.models.shared.StartImageBuilderResult startImageBuilderResult) {
        this.startImageBuilderResult = startImageBuilderResult;
        return this;
    }
    public Long statusCode;
    public StartImageBuilderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}