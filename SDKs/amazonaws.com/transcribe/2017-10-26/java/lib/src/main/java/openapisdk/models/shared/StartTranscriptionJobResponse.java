package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTranscriptionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJob")
    public TranscriptionJob transcriptionJob;
    public StartTranscriptionJobResponse withTranscriptionJob(TranscriptionJob transcriptionJob) {
        this.transcriptionJob = transcriptionJob;
        return this;
    }
}