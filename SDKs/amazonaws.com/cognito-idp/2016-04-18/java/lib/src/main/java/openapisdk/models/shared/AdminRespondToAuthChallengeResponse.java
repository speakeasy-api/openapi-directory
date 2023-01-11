package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminRespondToAuthChallengeResponse
 * Responds to the authentication challenge, as an administrator.
**/
public class AdminRespondToAuthChallengeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthenticationResult")
    public AuthenticationResultType authenticationResult;
    public AdminRespondToAuthChallengeResponse withAuthenticationResult(AuthenticationResultType authenticationResult) {
        this.authenticationResult = authenticationResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeName")
    public ChallengeNameTypeEnum challengeName;
    public AdminRespondToAuthChallengeResponse withChallengeName(ChallengeNameTypeEnum challengeName) {
        this.challengeName = challengeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeParameters")
    public java.util.Map<String, String> challengeParameters;
    public AdminRespondToAuthChallengeResponse withChallengeParameters(java.util.Map<String, String> challengeParameters) {
        this.challengeParameters = challengeParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public AdminRespondToAuthChallengeResponse withSession(String session) {
        this.session = session;
        return this;
    }
}