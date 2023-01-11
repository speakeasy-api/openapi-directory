package openapisdk.models.shared;



/**
 * CachePolicyList
 * A list of cache policies.
**/
public class CachePolicyList {
    public CachePolicySummaryList[] items;
    public CachePolicyList withItems(CachePolicySummaryList[] items) {
        this.items = items;
        return this;
    }
    public Long maxItems;
    public CachePolicyList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public CachePolicyList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public CachePolicyList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}