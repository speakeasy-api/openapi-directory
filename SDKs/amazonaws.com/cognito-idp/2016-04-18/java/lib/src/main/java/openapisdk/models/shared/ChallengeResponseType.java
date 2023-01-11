package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChallengeResponseType
 * The challenge response type.
**/
public class ChallengeResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeName")
    public ChallengeNameEnum challengeName;
    public ChallengeResponseType withChallengeName(ChallengeNameEnum challengeName) {
        this.challengeName = challengeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeResponse")
    public ChallengeResponseEnum challengeResponse;
    public ChallengeResponseType withChallengeResponse(ChallengeResponseEnum challengeResponse) {
        this.challengeResponse = challengeResponse;
        return this;
    }
}