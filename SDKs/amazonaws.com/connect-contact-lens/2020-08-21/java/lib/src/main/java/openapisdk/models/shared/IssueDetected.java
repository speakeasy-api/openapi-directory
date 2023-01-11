package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IssueDetected
 * Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
**/
public class IssueDetected {
    @JsonProperty("CharacterOffsets")
    public CharacterOffsets characterOffsets;
    public IssueDetected withCharacterOffsets(CharacterOffsets characterOffsets) {
        this.characterOffsets = characterOffsets;
        return this;
    }
}