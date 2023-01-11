package openapisdk.models.operations;



public class UpdateNetworkProfileResponse {
    public Object argumentException;
    public UpdateNetworkProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateNetworkProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateNetworkProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateNetworkProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateNetworkProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateNetworkProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateNetworkProfileResult updateNetworkProfileResult;
    public UpdateNetworkProfileResponse withUpdateNetworkProfileResult(openapisdk.models.shared.UpdateNetworkProfileResult updateNetworkProfileResult) {
        this.updateNetworkProfileResult = updateNetworkProfileResult;
        return this;
    }
}