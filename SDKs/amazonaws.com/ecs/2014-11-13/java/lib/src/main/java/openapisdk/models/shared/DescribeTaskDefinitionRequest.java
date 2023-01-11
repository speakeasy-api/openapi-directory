package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTaskDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public TaskDefinitionFieldEnum[] include;
    public DescribeTaskDefinitionRequest withInclude(TaskDefinitionFieldEnum[] include) {
        this.include = include;
        return this;
    }
    @JsonProperty("taskDefinition")
    public String taskDefinition;
    public DescribeTaskDefinitionRequest withTaskDefinition(String taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}