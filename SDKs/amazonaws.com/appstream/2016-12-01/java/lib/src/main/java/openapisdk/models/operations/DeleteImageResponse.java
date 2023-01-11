package openapisdk.models.operations;



public class DeleteImageResponse {
    public Object concurrentModificationException;
    public DeleteImageResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImageResult deleteImageResult;
    public DeleteImageResponse withDeleteImageResult(openapisdk.models.shared.DeleteImageResult deleteImageResult) {
        this.deleteImageResult = deleteImageResult;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteImageResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteImageResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}