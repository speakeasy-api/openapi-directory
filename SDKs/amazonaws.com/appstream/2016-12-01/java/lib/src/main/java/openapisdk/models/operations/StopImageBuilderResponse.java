package openapisdk.models.operations;



public class StopImageBuilderResponse {
    public Object concurrentModificationException;
    public StopImageBuilderResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StopImageBuilderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedException;
    public StopImageBuilderResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopImageBuilderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopImageBuilderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopImageBuilderResult stopImageBuilderResult;
    public StopImageBuilderResponse withStopImageBuilderResult(openapisdk.models.shared.StopImageBuilderResult stopImageBuilderResult) {
        this.stopImageBuilderResult = stopImageBuilderResult;
        return this;
    }
}