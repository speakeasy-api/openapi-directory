package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkflowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRunProperties")
    public java.util.Map<String, String> defaultRunProperties;
    public UpdateWorkflowRequest withDefaultRunProperties(java.util.Map<String, String> defaultRunProperties) {
        this.defaultRunProperties = defaultRunProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateWorkflowRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrentRuns")
    public Long maxConcurrentRuns;
    public UpdateWorkflowRequest withMaxConcurrentRuns(Long maxConcurrentRuns) {
        this.maxConcurrentRuns = maxConcurrentRuns;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateWorkflowRequest withName(String name) {
        this.name = name;
        return this;
    }
}