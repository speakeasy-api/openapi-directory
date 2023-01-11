package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowRunPropertiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunProperties")
    public java.util.Map<String, String> runProperties;
    public GetWorkflowRunPropertiesResponse withRunProperties(java.util.Map<String, String> runProperties) {
        this.runProperties = runProperties;
        return this;
    }
}