package openapisdk.models.operations;



public class CreateNetworkProfileResponse {
    public Object argumentException;
    public CreateNetworkProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateNetworkProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateNetworkProfileResult createNetworkProfileResult;
    public CreateNetworkProfileResponse withCreateNetworkProfileResult(openapisdk.models.shared.CreateNetworkProfileResult createNetworkProfileResult) {
        this.createNetworkProfileResult = createNetworkProfileResult;
        return this;
    }
    public Object limitExceededException;
    public CreateNetworkProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateNetworkProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateNetworkProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateNetworkProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}