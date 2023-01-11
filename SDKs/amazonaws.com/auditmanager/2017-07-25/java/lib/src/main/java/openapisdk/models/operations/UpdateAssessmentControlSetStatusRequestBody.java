package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAssessmentControlSetStatusRequestBody {
    @JsonProperty("comment")
    public String comment;
    public UpdateAssessmentControlSetStatusRequestBody withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("status")
    public UpdateAssessmentControlSetStatusRequestBodyStatusEnum status;
    public UpdateAssessmentControlSetStatusRequestBody withStatus(UpdateAssessmentControlSetStatusRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}