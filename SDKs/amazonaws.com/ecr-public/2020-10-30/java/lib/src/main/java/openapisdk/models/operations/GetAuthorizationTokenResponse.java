package openapisdk.models.operations;



public class GetAuthorizationTokenResponse {
    public String contentType;
    public GetAuthorizationTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAuthorizationTokenResponse getAuthorizationTokenResponse;
    public GetAuthorizationTokenResponse withGetAuthorizationTokenResponse(openapisdk.models.shared.GetAuthorizationTokenResponse getAuthorizationTokenResponse) {
        this.getAuthorizationTokenResponse = getAuthorizationTokenResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetAuthorizationTokenResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public GetAuthorizationTokenResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetAuthorizationTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}