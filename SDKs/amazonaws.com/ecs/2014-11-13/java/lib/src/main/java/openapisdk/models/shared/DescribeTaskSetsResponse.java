package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTaskSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public DescribeTaskSetsResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSets")
    public TaskSet[] taskSets;
    public DescribeTaskSetsResponse withTaskSets(TaskSet[] taskSets) {
        this.taskSets = taskSets;
        return this;
    }
}