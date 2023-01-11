package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SentimentFilter
 * An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
**/
public class SentimentFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTimeRange")
    public AbsoluteTimeRange absoluteTimeRange;
    public SentimentFilter withAbsoluteTimeRange(AbsoluteTimeRange absoluteTimeRange) {
        this.absoluteTimeRange = absoluteTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Negate")
    public Boolean negate;
    public SentimentFilter withNegate(Boolean negate) {
        this.negate = negate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParticipantRole")
    public ParticipantRoleEnum participantRole;
    public SentimentFilter withParticipantRole(ParticipantRoleEnum participantRole) {
        this.participantRole = participantRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelativeTimeRange")
    public RelativeTimeRange relativeTimeRange;
    public SentimentFilter withRelativeTimeRange(RelativeTimeRange relativeTimeRange) {
        this.relativeTimeRange = relativeTimeRange;
        return this;
    }
    @JsonProperty("Sentiments")
    public SentimentValueEnum[] sentiments;
    public SentimentFilter withSentiments(SentimentValueEnum[] sentiments) {
        this.sentiments = sentiments;
        return this;
    }
}