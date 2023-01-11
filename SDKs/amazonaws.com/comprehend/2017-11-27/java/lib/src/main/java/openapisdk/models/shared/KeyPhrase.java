package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyPhrase
 * Describes a key noun phrase.
**/
public class KeyPhrase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public KeyPhrase withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public KeyPhrase withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public KeyPhrase withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public KeyPhrase withText(String text) {
        this.text = text;
        return this;
    }
}