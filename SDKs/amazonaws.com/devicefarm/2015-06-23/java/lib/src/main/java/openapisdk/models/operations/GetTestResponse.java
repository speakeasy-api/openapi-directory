package openapisdk.models.operations;



public class GetTestResponse {
    public Object argumentException;
    public GetTestResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTestResult getTestResult;
    public GetTestResponse withGetTestResult(openapisdk.models.shared.GetTestResult getTestResult) {
        this.getTestResult = getTestResult;
        return this;
    }
    public Object limitExceededException;
    public GetTestResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetTestResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetTestResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}