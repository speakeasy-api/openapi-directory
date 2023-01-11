package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataflowGraphResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagEdges")
    public CodeGenEdge[] dagEdges;
    public GetDataflowGraphResponse withDagEdges(CodeGenEdge[] dagEdges) {
        this.dagEdges = dagEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagNodes")
    public CodeGenNode[] dagNodes;
    public GetDataflowGraphResponse withDagNodes(CodeGenNode[] dagNodes) {
        this.dagNodes = dagNodes;
        return this;
    }
}