package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUserAttributeVerificationCodeRequest
 * Represents the request to get user attribute verification.
**/
public class GetUserAttributeVerificationCodeRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public GetUserAttributeVerificationCodeRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("AttributeName")
    public String attributeName;
    public GetUserAttributeVerificationCodeRequest withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public GetUserAttributeVerificationCodeRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
}