package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMedicalTranscriptionJobRequest {
    @JsonProperty("MedicalTranscriptionJobName")
    public String medicalTranscriptionJobName;
    public GetMedicalTranscriptionJobRequest withMedicalTranscriptionJobName(String medicalTranscriptionJobName) {
        this.medicalTranscriptionJobName = medicalTranscriptionJobName;
        return this;
    }
}