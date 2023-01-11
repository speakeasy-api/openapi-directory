package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SentimentAnalysisSettings
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
public class SentimentAnalysisSettings {
    @JsonProperty("detectSentiment")
    public Boolean detectSentiment;
    public SentimentAnalysisSettings withDetectSentiment(Boolean detectSentiment) {
        this.detectSentiment = detectSentiment;
        return this;
    }
}