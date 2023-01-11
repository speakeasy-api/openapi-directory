package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranscriptFilter
 * Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
**/
public class TranscriptFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTimeRange")
    public AbsoluteTimeRange absoluteTimeRange;
    public TranscriptFilter withAbsoluteTimeRange(AbsoluteTimeRange absoluteTimeRange) {
        this.absoluteTimeRange = absoluteTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Negate")
    public Boolean negate;
    public TranscriptFilter withNegate(Boolean negate) {
        this.negate = negate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantRole")
    public ParticipantRoleEnum participantRole;
    public TranscriptFilter withParticipantRole(ParticipantRoleEnum participantRole) {
        this.participantRole = participantRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelativeTimeRange")
    public RelativeTimeRange relativeTimeRange;
    public TranscriptFilter withRelativeTimeRange(RelativeTimeRange relativeTimeRange) {
        this.relativeTimeRange = relativeTimeRange;
        return this;
    }
    @JsonProperty("Targets")
    public String[] targets;
    public TranscriptFilter withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("TranscriptFilterType")
    public TranscriptFilterTypeEnum transcriptFilterType;
    public TranscriptFilter withTranscriptFilterType(TranscriptFilterTypeEnum transcriptFilterType) {
        this.transcriptFilterType = transcriptFilterType;
        return this;
    }
}