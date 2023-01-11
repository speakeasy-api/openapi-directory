package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SentimentResponse
 * <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
**/
public class SentimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentLabel")
    public String sentimentLabel;
    public SentimentResponse withSentimentLabel(String sentimentLabel) {
        this.sentimentLabel = sentimentLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentScore")
    public String sentimentScore;
    public SentimentResponse withSentimentScore(String sentimentScore) {
        this.sentimentScore = sentimentScore;
        return this;
    }
}