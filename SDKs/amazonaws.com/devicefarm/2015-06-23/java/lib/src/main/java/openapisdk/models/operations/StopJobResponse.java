package openapisdk.models.operations;



public class StopJobResponse {
    public Object argumentException;
    public StopJobResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public StopJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public StopJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public StopJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public StopJobResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public StopJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopJobResult stopJobResult;
    public StopJobResponse withStopJobResult(openapisdk.models.shared.StopJobResult stopJobResult) {
        this.stopJobResult = stopJobResult;
        return this;
    }
}