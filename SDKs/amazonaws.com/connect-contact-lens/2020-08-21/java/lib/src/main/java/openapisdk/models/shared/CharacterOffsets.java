package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CharacterOffsets
 * For characters that were detected as issues, where they occur in the transcript.
**/
public class CharacterOffsets {
    @JsonProperty("BeginOffsetChar")
    public Long beginOffsetChar;
    public CharacterOffsets withBeginOffsetChar(Long beginOffsetChar) {
        this.beginOffsetChar = beginOffsetChar;
        return this;
    }
    @JsonProperty("EndOffsetChar")
    public Long endOffsetChar;
    public CharacterOffsets withEndOffsetChar(Long endOffsetChar) {
        this.endOffsetChar = endOffsetChar;
        return this;
    }
}