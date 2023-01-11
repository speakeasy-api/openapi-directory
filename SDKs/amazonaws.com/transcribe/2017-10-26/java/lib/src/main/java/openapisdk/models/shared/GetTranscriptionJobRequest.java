package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTranscriptionJobRequest {
    @JsonProperty("TranscriptionJobName")
    public String transcriptionJobName;
    public GetTranscriptionJobRequest withTranscriptionJobName(String transcriptionJobName) {
        this.transcriptionJobName = transcriptionJobName;
        return this;
    }
}