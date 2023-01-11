package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetQualificationScoreRequest {
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public GetQualificationScoreRequest withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public GetQualificationScoreRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}