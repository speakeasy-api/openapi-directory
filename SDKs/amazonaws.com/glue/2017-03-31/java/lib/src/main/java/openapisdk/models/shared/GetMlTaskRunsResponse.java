package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMlTaskRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetMlTaskRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRuns")
    public TaskRun[] taskRuns;
    public GetMlTaskRunsResponse withTaskRuns(TaskRun[] taskRuns) {
        this.taskRuns = taskRuns;
        return this;
    }
}