package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VerifyUserAttributeRequest
 * Represents the request to verify user attributes.
**/
public class VerifyUserAttributeRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public VerifyUserAttributeRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("AttributeName")
    public String attributeName;
    public VerifyUserAttributeRequest withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonProperty("Code")
    public String code;
    public VerifyUserAttributeRequest withCode(String code) {
        this.code = code;
        return this;
    }
}