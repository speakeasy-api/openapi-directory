package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopAssessmentRunRequest {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public StopAssessmentRunRequest withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopAction")
    public StopActionEnum stopAction;
    public StopAssessmentRunRequest withStopAction(StopActionEnum stopAction) {
        this.stopAction = stopAction;
        return this;
    }
}