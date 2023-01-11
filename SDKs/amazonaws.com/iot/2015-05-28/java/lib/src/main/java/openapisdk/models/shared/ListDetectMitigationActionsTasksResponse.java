package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDetectMitigationActionsTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDetectMitigationActionsTasksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public DetectMitigationActionsTaskSummary[] tasks;
    public ListDetectMitigationActionsTasksResponse withTasks(DetectMitigationActionsTaskSummary[] tasks) {
        this.tasks = tasks;
        return this;
    }
}