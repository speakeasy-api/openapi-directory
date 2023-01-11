package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetQualificationTypeRequest {
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public GetQualificationTypeRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
}