package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntentConfidence
 * Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.
**/
public class IntentConfidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public IntentConfidence withScore(Double score) {
        this.score = score;
        return this;
    }
}