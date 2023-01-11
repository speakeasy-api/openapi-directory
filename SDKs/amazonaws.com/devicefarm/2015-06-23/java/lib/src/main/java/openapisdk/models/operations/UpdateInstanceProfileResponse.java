package openapisdk.models.operations;



public class UpdateInstanceProfileResponse {
    public Object argumentException;
    public UpdateInstanceProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateInstanceProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateInstanceProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateInstanceProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateInstanceProfileResult updateInstanceProfileResult;
    public UpdateInstanceProfileResponse withUpdateInstanceProfileResult(openapisdk.models.shared.UpdateInstanceProfileResult updateInstanceProfileResult) {
        this.updateInstanceProfileResult = updateInstanceProfileResult;
        return this;
    }
}