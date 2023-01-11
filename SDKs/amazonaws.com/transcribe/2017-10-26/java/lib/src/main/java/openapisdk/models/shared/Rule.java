package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * A condition in the call between the customer and the agent that you want to filter for.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterruptionFilter")
    public InterruptionFilter interruptionFilter;
    public Rule withInterruptionFilter(InterruptionFilter interruptionFilter) {
        this.interruptionFilter = interruptionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonTalkTimeFilter")
    public NonTalkTimeFilter nonTalkTimeFilter;
    public Rule withNonTalkTimeFilter(NonTalkTimeFilter nonTalkTimeFilter) {
        this.nonTalkTimeFilter = nonTalkTimeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SentimentFilter")
    public SentimentFilter sentimentFilter;
    public Rule withSentimentFilter(SentimentFilter sentimentFilter) {
        this.sentimentFilter = sentimentFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptFilter")
    public TranscriptFilter transcriptFilter;
    public Rule withTranscriptFilter(TranscriptFilter transcriptFilter) {
        this.transcriptFilter = transcriptFilter;
        return this;
    }
}