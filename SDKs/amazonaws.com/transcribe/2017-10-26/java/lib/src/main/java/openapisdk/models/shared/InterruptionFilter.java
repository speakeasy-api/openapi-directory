package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InterruptionFilter
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
public class InterruptionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTimeRange")
    public AbsoluteTimeRange absoluteTimeRange;
    public InterruptionFilter withAbsoluteTimeRange(AbsoluteTimeRange absoluteTimeRange) {
        this.absoluteTimeRange = absoluteTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Negate")
    public Boolean negate;
    public InterruptionFilter withNegate(Boolean negate) {
        this.negate = negate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantRole")
    public ParticipantRoleEnum participantRole;
    public InterruptionFilter withParticipantRole(ParticipantRoleEnum participantRole) {
        this.participantRole = participantRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelativeTimeRange")
    public RelativeTimeRange relativeTimeRange;
    public InterruptionFilter withRelativeTimeRange(RelativeTimeRange relativeTimeRange) {
        this.relativeTimeRange = relativeTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Threshold")
    public Long threshold;
    public InterruptionFilter withThreshold(Long threshold) {
        this.threshold = threshold;
        return this;
    }
}