package openapisdk.models.operations;



public class GetSuiteResponse {
    public Object argumentException;
    public GetSuiteResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetSuiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSuiteResult getSuiteResult;
    public GetSuiteResponse withGetSuiteResult(openapisdk.models.shared.GetSuiteResult getSuiteResult) {
        this.getSuiteResult = getSuiteResult;
        return this;
    }
    public Object limitExceededException;
    public GetSuiteResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetSuiteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetSuiteResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetSuiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}