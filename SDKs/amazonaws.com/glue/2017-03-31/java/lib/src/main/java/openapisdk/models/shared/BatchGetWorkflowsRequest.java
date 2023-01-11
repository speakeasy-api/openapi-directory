package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetWorkflowsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGraph")
    public Boolean includeGraph;
    public BatchGetWorkflowsRequest withIncludeGraph(Boolean includeGraph) {
        this.includeGraph = includeGraph;
        return this;
    }
    @JsonProperty("Names")
    public String[] names;
    public BatchGetWorkflowsRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
}