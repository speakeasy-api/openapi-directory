package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserAttributesRequest
 * Represents the request to update user attributes.
**/
public class UpdateUserAttributesRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public UpdateUserAttributesRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public UpdateUserAttributesRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public UpdateUserAttributesRequest withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
}