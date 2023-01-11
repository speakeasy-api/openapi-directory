package openapisdk.models.operations;



public class DeleteRunResponse {
    public Object argumentException;
    public DeleteRunResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRunResult;
    public DeleteRunResponse withDeleteRunResult(java.util.Map<String, Object> deleteRunResult) {
        this.deleteRunResult = deleteRunResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteRunResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteRunResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteRunResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}