package openapisdk.models.operations;



public class GetJobResponse {
    public Object argumentException;
    public GetJobResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobResult getJobResult;
    public GetJobResponse withGetJobResult(openapisdk.models.shared.GetJobResult getJobResult) {
        this.getJobResult = getJobResult;
        return this;
    }
    public Object limitExceededException;
    public GetJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetJobResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}