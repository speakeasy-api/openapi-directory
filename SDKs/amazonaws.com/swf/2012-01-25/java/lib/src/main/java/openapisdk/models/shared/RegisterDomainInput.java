package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterDomainInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RegisterDomainInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RegisterDomainInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public ResourceTag[] tags;
    public RegisterDomainInput withTags(ResourceTag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("workflowExecutionRetentionPeriodInDays")
    public String workflowExecutionRetentionPeriodInDays;
    public RegisterDomainInput withWorkflowExecutionRetentionPeriodInDays(String workflowExecutionRetentionPeriodInDays) {
        this.workflowExecutionRetentionPeriodInDays = workflowExecutionRetentionPeriodInDays;
        return this;
    }
}