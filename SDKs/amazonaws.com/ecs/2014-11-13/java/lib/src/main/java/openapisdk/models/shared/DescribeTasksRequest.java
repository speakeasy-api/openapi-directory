package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DescribeTasksRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public TaskFieldEnum[] include;
    public DescribeTasksRequest withInclude(TaskFieldEnum[] include) {
        this.include = include;
        return this;
    }
    @JsonProperty("tasks")
    public String[] tasks;
    public DescribeTasksRequest withTasks(String[] tasks) {
        this.tasks = tasks;
        return this;
    }
}