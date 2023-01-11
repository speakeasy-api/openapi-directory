package openapisdk.models.shared;



/**
 * ReservedCacheNodeMessage
 * Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
**/
public class ReservedCacheNodeMessage {
    public String marker;
    public ReservedCacheNodeMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedCacheNodeList[] reservedCacheNodes;
    public ReservedCacheNodeMessage withReservedCacheNodes(ReservedCacheNodeList[] reservedCacheNodes) {
        this.reservedCacheNodes = reservedCacheNodes;
        return this;
    }
}