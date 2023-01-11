package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForgotPasswordRequest
 * Represents the request to reset a user's password.
**/
public class ForgotPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public ForgotPasswordRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public ForgotPasswordRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public ForgotPasswordRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretHash")
    public String secretHash;
    public ForgotPasswordRequest withSecretHash(String secretHash) {
        this.secretHash = secretHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserContextData")
    public UserContextDataType userContextData;
    public ForgotPasswordRequest withUserContextData(UserContextDataType userContextData) {
        this.userContextData = userContextData;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public ForgotPasswordRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}