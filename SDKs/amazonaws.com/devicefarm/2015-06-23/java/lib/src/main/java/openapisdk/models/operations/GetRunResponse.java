package openapisdk.models.operations;



public class GetRunResponse {
    public Object argumentException;
    public GetRunResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRunResult getRunResult;
    public GetRunResponse withGetRunResult(openapisdk.models.shared.GetRunResult getRunResult) {
        this.getRunResult = getRunResult;
        return this;
    }
    public Object limitExceededException;
    public GetRunResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetRunResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetRunResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}