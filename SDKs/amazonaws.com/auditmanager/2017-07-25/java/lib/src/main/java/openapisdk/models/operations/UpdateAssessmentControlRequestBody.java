package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentBody")
    public String commentBody;
    public UpdateAssessmentControlRequestBody withCommentBody(String commentBody) {
        this.commentBody = commentBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlStatus")
    public UpdateAssessmentControlRequestBodyControlStatusEnum controlStatus;
    public UpdateAssessmentControlRequestBody withControlStatus(UpdateAssessmentControlRequestBodyControlStatusEnum controlStatus) {
        this.controlStatus = controlStatus;
        return this;
    }
}