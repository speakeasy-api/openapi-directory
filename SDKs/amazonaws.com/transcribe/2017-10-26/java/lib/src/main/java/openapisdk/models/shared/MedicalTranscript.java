package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MedicalTranscript
 * Identifies the location of a medical transcript.
**/
public class MedicalTranscript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptFileUri")
    public String transcriptFileUri;
    public MedicalTranscript withTranscriptFileUri(String transcriptFileUri) {
        this.transcriptFileUri = transcriptFileUri;
        return this;
    }
}