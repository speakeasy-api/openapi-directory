package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfirmForgotPasswordRequest
 * The request representing the confirmation for a password reset.
**/
public class ConfirmForgotPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public ConfirmForgotPasswordRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public ConfirmForgotPasswordRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public ConfirmForgotPasswordRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("ConfirmationCode")
    public String confirmationCode;
    public ConfirmForgotPasswordRequest withConfirmationCode(String confirmationCode) {
        this.confirmationCode = confirmationCode;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public ConfirmForgotPasswordRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretHash")
    public String secretHash;
    public ConfirmForgotPasswordRequest withSecretHash(String secretHash) {
        this.secretHash = secretHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserContextData")
    public UserContextDataType userContextData;
    public ConfirmForgotPasswordRequest withUserContextData(UserContextDataType userContextData) {
        this.userContextData = userContextData;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public ConfirmForgotPasswordRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}