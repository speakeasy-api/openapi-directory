package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetaccesstokenIdRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Get access token using authorization code")
    public openapisdk.models.shared.AccessToken getAccessTokenUsingAuthorizationCode;
    public GetaccesstokenIdRequestBody withGetAccessTokenUsingAuthorizationCode(openapisdk.models.shared.AccessToken getAccessTokenUsingAuthorizationCode) {
        this.getAccessTokenUsingAuthorizationCode = getAccessTokenUsingAuthorizationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Get access token using device code and OTP")
    public Object getAccessTokenUsingDeviceCodeAndOTP;
    public GetaccesstokenIdRequestBody withGetAccessTokenUsingDeviceCodeAndOtp(Object getAccessTokenUsingDeviceCodeAndOTP) {
        this.getAccessTokenUsingDeviceCodeAndOTP = getAccessTokenUsingDeviceCodeAndOTP;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Get access token using refresh token")
    public openapisdk.models.shared.RefreshToken getAccessTokenUsingRefreshToken;
    public GetaccesstokenIdRequestBody withGetAccessTokenUsingRefreshToken(openapisdk.models.shared.RefreshToken getAccessTokenUsingRefreshToken) {
        this.getAccessTokenUsingRefreshToken = getAccessTokenUsingRefreshToken;
        return this;
    }
}