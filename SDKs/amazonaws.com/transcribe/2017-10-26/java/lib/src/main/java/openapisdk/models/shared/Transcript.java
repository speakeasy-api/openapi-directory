package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transcript
 * Identifies the location of a transcription.
**/
public class Transcript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedactedTranscriptFileUri")
    public String redactedTranscriptFileUri;
    public Transcript withRedactedTranscriptFileUri(String redactedTranscriptFileUri) {
        this.redactedTranscriptFileUri = redactedTranscriptFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptFileUri")
    public String transcriptFileUri;
    public Transcript withTranscriptFileUri(String transcriptFileUri) {
        this.transcriptFileUri = transcriptFileUri;
        return this;
    }
}