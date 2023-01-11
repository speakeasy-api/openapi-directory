package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminUpdateUserAttributesRequest
 * Represents the request to update the user's attributes as an administrator.
**/
public class AdminUpdateUserAttributesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminUpdateUserAttributesRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public AdminUpdateUserAttributesRequest withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminUpdateUserAttributesRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminUpdateUserAttributesRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}