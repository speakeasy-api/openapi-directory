package openapisdk.models.shared;



/**
 * ReservedNodesMessage
 * <p/>
**/
public class ReservedNodesMessage {
    public String marker;
    public ReservedNodesMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedNodeList[] reservedNodes;
    public ReservedNodesMessage withReservedNodes(ReservedNodeList[] reservedNodes) {
        this.reservedNodes = reservedNodes;
        return this;
    }
}