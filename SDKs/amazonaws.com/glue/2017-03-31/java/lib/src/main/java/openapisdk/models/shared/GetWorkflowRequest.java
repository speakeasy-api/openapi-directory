package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGraph")
    public Boolean includeGraph;
    public GetWorkflowRequest withIncludeGraph(Boolean includeGraph) {
        this.includeGraph = includeGraph;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetWorkflowRequest withName(String name) {
        this.name = name;
        return this;
    }
}