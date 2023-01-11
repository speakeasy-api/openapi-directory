package openapisdk.models.operations;



public class GetInstanceProfileResponse {
    public Object argumentException;
    public GetInstanceProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceProfileResult getInstanceProfileResult;
    public GetInstanceProfileResponse withGetInstanceProfileResult(openapisdk.models.shared.GetInstanceProfileResult getInstanceProfileResult) {
        this.getInstanceProfileResult = getInstanceProfileResult;
        return this;
    }
    public Object limitExceededException;
    public GetInstanceProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetInstanceProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetInstanceProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}