package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowGraph
 * A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
**/
public class WorkflowGraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Edges")
    public Edge[] edges;
    public WorkflowGraph withEdges(Edge[] edges) {
        this.edges = edges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Nodes")
    public Node[] nodes;
    public WorkflowGraph withNodes(Node[] nodes) {
        this.nodes = nodes;
        return this;
    }
}