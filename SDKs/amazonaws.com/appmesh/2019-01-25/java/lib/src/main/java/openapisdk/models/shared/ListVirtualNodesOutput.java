package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVirtualNodesOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class ListVirtualNodesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListVirtualNodesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("virtualNodes")
    public VirtualNodeRef[] virtualNodes;
    public ListVirtualNodesOutput withVirtualNodes(VirtualNodeRef[] virtualNodes) {
        this.virtualNodes = virtualNodes;
        return this;
    }
}