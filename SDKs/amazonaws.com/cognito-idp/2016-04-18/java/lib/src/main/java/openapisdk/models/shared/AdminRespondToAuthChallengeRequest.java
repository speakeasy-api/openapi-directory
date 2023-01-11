package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminRespondToAuthChallengeRequest
 * The request to respond to the authentication challenge, as an administrator.
**/
public class AdminRespondToAuthChallengeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsMetadata")
    public AnalyticsMetadataType analyticsMetadata;
    public AdminRespondToAuthChallengeRequest withAnalyticsMetadata(AnalyticsMetadataType analyticsMetadata) {
        this.analyticsMetadata = analyticsMetadata;
        return this;
    }
    @JsonProperty("ChallengeName")
    public ChallengeNameTypeEnum challengeName;
    public AdminRespondToAuthChallengeRequest withChallengeName(ChallengeNameTypeEnum challengeName) {
        this.challengeName = challengeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeResponses")
    public java.util.Map<String, String> challengeResponses;
    public AdminRespondToAuthChallengeRequest withChallengeResponses(java.util.Map<String, String> challengeResponses) {
        this.challengeResponses = challengeResponses;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public AdminRespondToAuthChallengeRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminRespondToAuthChallengeRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContextData")
    public ContextDataType contextData;
    public AdminRespondToAuthChallengeRequest withContextData(ContextDataType contextData) {
        this.contextData = contextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public AdminRespondToAuthChallengeRequest withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminRespondToAuthChallengeRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}