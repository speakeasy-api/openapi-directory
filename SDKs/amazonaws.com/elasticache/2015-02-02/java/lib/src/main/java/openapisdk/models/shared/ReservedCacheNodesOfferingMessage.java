package openapisdk.models.shared;



/**
 * ReservedCacheNodesOfferingMessage
 * Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
**/
public class ReservedCacheNodesOfferingMessage {
    public String marker;
    public ReservedCacheNodesOfferingMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReservedCacheNodesOfferingList[] reservedCacheNodesOfferings;
    public ReservedCacheNodesOfferingMessage withReservedCacheNodesOfferings(ReservedCacheNodesOfferingList[] reservedCacheNodesOfferings) {
        this.reservedCacheNodesOfferings = reservedCacheNodesOfferings;
        return this;
    }
}