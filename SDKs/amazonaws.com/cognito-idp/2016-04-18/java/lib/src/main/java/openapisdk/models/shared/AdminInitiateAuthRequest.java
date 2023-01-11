package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminInitiateAuthRequest
 * Initiates the authorization request, as an administrator.
**/
public class AdminInitiateAuthRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public AdminInitiateAuthRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("AuthFlow")
    public AuthFlowTypeEnum authFlow;
    public AdminInitiateAuthRequest withAuthFlow(AuthFlowTypeEnum authFlow) {
        this.authFlow = authFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthParameters")
    public java.util.Map<String, String> authParameters;
    public AdminInitiateAuthRequest withAuthParameters(java.util.Map<String, String> authParameters) {
        this.authParameters = authParameters;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public AdminInitiateAuthRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminInitiateAuthRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContextData")
    public ContextDataType contextData;
    public AdminInitiateAuthRequest withContextData(ContextDataType contextData) {
        this.contextData = contextData;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminInitiateAuthRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}