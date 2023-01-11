package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTaskDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public DescribeTaskDefinitionResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinition")
    public TaskDefinition taskDefinition;
    public DescribeTaskDefinitionResponse withTaskDefinition(TaskDefinition taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}