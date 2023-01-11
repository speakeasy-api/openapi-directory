package openapisdk.models.operations;



public class DeleteParallelDataResponse {
    public Object concurrentModificationException;
    public DeleteParallelDataResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteParallelDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteParallelDataResponse deleteParallelDataResponse;
    public DeleteParallelDataResponse withDeleteParallelDataResponse(openapisdk.models.shared.DeleteParallelDataResponse deleteParallelDataResponse) {
        this.deleteParallelDataResponse = deleteParallelDataResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteParallelDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteParallelDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteParallelDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteParallelDataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}