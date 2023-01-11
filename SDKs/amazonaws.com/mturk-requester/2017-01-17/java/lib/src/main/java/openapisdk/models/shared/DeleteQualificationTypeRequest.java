package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteQualificationTypeRequest {
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public DeleteQualificationTypeRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
}