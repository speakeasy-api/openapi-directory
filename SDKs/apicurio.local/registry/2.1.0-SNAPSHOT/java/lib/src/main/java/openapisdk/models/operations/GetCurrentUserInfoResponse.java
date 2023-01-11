package openapisdk.models.operations;



public class GetCurrentUserInfoResponse {
    public String contentType;
    public GetCurrentUserInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCurrentUserInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCurrentUserInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserInfo userInfo;
    public GetCurrentUserInfoResponse withUserInfo(openapisdk.models.shared.UserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}