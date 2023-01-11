package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDetectMitigationActionsTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSummary")
    public DetectMitigationActionsTaskSummary taskSummary;
    public DescribeDetectMitigationActionsTaskResponse withTaskSummary(DetectMitigationActionsTaskSummary taskSummary) {
        this.taskSummary = taskSummary;
        return this;
    }
}