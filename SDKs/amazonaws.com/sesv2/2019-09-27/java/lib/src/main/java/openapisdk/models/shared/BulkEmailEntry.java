package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkEmailEntry {
    @JsonProperty("Destination")
    public Destination destination;
    public BulkEmailEntry withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementEmailContent")
    public ReplacementEmailContent replacementEmailContent;
    public BulkEmailEntry withReplacementEmailContent(ReplacementEmailContent replacementEmailContent) {
        this.replacementEmailContent = replacementEmailContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementTags")
    public MessageTag[] replacementTags;
    public BulkEmailEntry withReplacementTags(MessageTag[] replacementTags) {
        this.replacementTags = replacementTags;
        return this;
    }
}