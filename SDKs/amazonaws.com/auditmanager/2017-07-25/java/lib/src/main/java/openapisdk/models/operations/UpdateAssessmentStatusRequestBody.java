package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAssessmentStatusRequestBody {
    @JsonProperty("status")
    public UpdateAssessmentStatusRequestBodyStatusEnum status;
    public UpdateAssessmentStatusRequestBody withStatus(UpdateAssessmentStatusRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}