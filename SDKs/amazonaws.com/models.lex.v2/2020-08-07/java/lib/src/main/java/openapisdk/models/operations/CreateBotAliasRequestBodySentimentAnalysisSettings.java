package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBotAliasRequestBodySentimentAnalysisSettings
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
public class CreateBotAliasRequestBodySentimentAnalysisSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectSentiment")
    public Boolean detectSentiment;
    public CreateBotAliasRequestBodySentimentAnalysisSettings withDetectSentiment(Boolean detectSentiment) {
        this.detectSentiment = detectSentiment;
        return this;
    }
}