package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListWorkflowRunsForRepo200ApplicationJson {
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListWorkflowRunsForRepo200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonProperty("workflow_runs")
    public openapisdk.models.shared.WorkflowRun[] workflowRuns;
    public ActionsListWorkflowRunsForRepo200ApplicationJson withWorkflowRuns(openapisdk.models.shared.WorkflowRun[] workflowRuns) {
        this.workflowRuns = workflowRuns;
        return this;
    }
}