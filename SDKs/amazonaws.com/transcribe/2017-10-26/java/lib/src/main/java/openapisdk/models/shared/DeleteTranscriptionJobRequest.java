package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTranscriptionJobRequest {
    @JsonProperty("TranscriptionJobName")
    public String transcriptionJobName;
    public DeleteTranscriptionJobRequest withTranscriptionJobName(String transcriptionJobName) {
        this.transcriptionJobName = transcriptionJobName;
        return this;
    }
}