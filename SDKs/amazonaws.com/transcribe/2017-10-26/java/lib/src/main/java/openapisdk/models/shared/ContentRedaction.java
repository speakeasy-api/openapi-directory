package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContentRedaction
 * Settings for content redaction within a transcription job.
**/
public class ContentRedaction {
    @JsonProperty("RedactionOutput")
    public RedactionOutputEnum redactionOutput;
    public ContentRedaction withRedactionOutput(RedactionOutputEnum redactionOutput) {
        this.redactionOutput = redactionOutput;
        return this;
    }
    @JsonProperty("RedactionType")
    public RedactionTypeEnum redactionType;
    public ContentRedaction withRedactionType(RedactionTypeEnum redactionType) {
        this.redactionType = redactionType;
        return this;
    }
}