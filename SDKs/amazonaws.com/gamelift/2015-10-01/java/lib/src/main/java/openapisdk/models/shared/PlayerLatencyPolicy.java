package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerLatencyPolicy
 * <p>Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time. </p> <p>Latency policies are part of a <a>GameSessionQueue</a>.</p>
**/
public class PlayerLatencyPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumIndividualPlayerLatencyMilliseconds")
    public Long maximumIndividualPlayerLatencyMilliseconds;
    public PlayerLatencyPolicy withMaximumIndividualPlayerLatencyMilliseconds(Long maximumIndividualPlayerLatencyMilliseconds) {
        this.maximumIndividualPlayerLatencyMilliseconds = maximumIndividualPlayerLatencyMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyDurationSeconds")
    public Long policyDurationSeconds;
    public PlayerLatencyPolicy withPolicyDurationSeconds(Long policyDurationSeconds) {
        this.policyDurationSeconds = policyDurationSeconds;
        return this;
    }
}