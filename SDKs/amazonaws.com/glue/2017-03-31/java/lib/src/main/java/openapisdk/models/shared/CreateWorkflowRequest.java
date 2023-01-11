package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkflowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRunProperties")
    public java.util.Map<String, String> defaultRunProperties;
    public CreateWorkflowRequest withDefaultRunProperties(java.util.Map<String, String> defaultRunProperties) {
        this.defaultRunProperties = defaultRunProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateWorkflowRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrentRuns")
    public Long maxConcurrentRuns;
    public CreateWorkflowRequest withMaxConcurrentRuns(Long maxConcurrentRuns) {
        this.maxConcurrentRuns = maxConcurrentRuns;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateWorkflowRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateWorkflowRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}