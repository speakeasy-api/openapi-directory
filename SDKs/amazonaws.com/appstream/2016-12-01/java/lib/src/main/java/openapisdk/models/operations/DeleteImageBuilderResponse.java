package openapisdk.models.operations;



public class DeleteImageBuilderResponse {
    public Object concurrentModificationException;
    public DeleteImageBuilderResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteImageBuilderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImageBuilderResult deleteImageBuilderResult;
    public DeleteImageBuilderResponse withDeleteImageBuilderResult(openapisdk.models.shared.DeleteImageBuilderResult deleteImageBuilderResult) {
        this.deleteImageBuilderResult = deleteImageBuilderResult;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteImageBuilderResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteImageBuilderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteImageBuilderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}