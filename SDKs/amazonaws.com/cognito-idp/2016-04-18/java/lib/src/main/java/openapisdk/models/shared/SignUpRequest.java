package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignUpRequest
 * Represents the request to register a user.
**/
public class SignUpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public SignUpRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public SignUpRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public SignUpRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public SignUpRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretHash")
    public String secretHash;
    public SignUpRequest withSecretHash(String secretHash) {
        this.secretHash = secretHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public SignUpRequest withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserContextData")
    public UserContextDataType userContextData;
    public SignUpRequest withUserContextData(UserContextDataType userContextData) {
        this.userContextData = userContextData;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public SignUpRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationData")
    public AttributeType[] validationData;
    public SignUpRequest withValidationData(AttributeType[] validationData) {
        this.validationData = validationData;
        return this;
    }
}