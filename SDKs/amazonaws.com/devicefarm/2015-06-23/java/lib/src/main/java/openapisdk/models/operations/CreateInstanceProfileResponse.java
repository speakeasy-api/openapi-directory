package openapisdk.models.operations;



public class CreateInstanceProfileResponse {
    public Object argumentException;
    public CreateInstanceProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInstanceProfileResult createInstanceProfileResult;
    public CreateInstanceProfileResponse withCreateInstanceProfileResult(openapisdk.models.shared.CreateInstanceProfileResult createInstanceProfileResult) {
        this.createInstanceProfileResult = createInstanceProfileResult;
        return this;
    }
    public Object limitExceededException;
    public CreateInstanceProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateInstanceProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateInstanceProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}