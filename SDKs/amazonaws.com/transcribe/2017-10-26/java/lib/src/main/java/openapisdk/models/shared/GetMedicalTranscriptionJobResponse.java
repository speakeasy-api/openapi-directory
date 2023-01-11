package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMedicalTranscriptionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MedicalTranscriptionJob")
    public MedicalTranscriptionJob medicalTranscriptionJob;
    public GetMedicalTranscriptionJobResponse withMedicalTranscriptionJob(MedicalTranscriptionJob medicalTranscriptionJob) {
        this.medicalTranscriptionJob = medicalTranscriptionJob;
        return this;
    }
}