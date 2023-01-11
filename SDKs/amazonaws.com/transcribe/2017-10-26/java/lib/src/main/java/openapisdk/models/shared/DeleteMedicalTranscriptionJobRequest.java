package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMedicalTranscriptionJobRequest {
    @JsonProperty("MedicalTranscriptionJobName")
    public String medicalTranscriptionJobName;
    public DeleteMedicalTranscriptionJobRequest withMedicalTranscriptionJobName(String medicalTranscriptionJobName) {
        this.medicalTranscriptionJobName = medicalTranscriptionJobName;
        return this;
    }
}