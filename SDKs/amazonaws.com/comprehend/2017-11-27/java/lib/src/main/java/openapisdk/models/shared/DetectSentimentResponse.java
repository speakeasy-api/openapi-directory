package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectSentimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sentiment")
    public SentimentTypeEnum sentiment;
    public DetectSentimentResponse withSentiment(SentimentTypeEnum sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SentimentScore")
    public SentimentScore sentimentScore;
    public DetectSentimentResponse withSentimentScore(SentimentScore sentimentScore) {
        this.sentimentScore = sentimentScore;
        return this;
    }
}