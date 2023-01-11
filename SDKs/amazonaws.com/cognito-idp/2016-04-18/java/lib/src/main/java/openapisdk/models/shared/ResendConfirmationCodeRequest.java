package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResendConfirmationCodeRequest
 * Represents the request to resend the confirmation code.
**/
public class ResendConfirmationCodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public ResendConfirmationCodeRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public ResendConfirmationCodeRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public ResendConfirmationCodeRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretHash")
    public String secretHash;
    public ResendConfirmationCodeRequest withSecretHash(String secretHash) {
        this.secretHash = secretHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserContextData")
    public UserContextDataType userContextData;
    public ResendConfirmationCodeRequest withUserContextData(UserContextDataType userContextData) {
        this.userContextData = userContextData;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public ResendConfirmationCodeRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}