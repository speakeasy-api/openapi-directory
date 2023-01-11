package openapisdk.models.operations;



public class GetNetworkProfileResponse {
    public Object argumentException;
    public GetNetworkProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetNetworkProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNetworkProfileResult getNetworkProfileResult;
    public GetNetworkProfileResponse withGetNetworkProfileResult(openapisdk.models.shared.GetNetworkProfileResult getNetworkProfileResult) {
        this.getNetworkProfileResult = getNetworkProfileResult;
        return this;
    }
    public Object limitExceededException;
    public GetNetworkProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetNetworkProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetNetworkProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetNetworkProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}