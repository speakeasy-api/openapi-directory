package openapisdk.models.shared;



/**
 * KeyGroupList
 * A list of key groups.
**/
public class KeyGroupList {
    public KeyGroupSummaryList[] items;
    public KeyGroupList withItems(KeyGroupSummaryList[] items) {
        this.items = items;
        return this;
    }
    public Long maxItems;
    public KeyGroupList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public KeyGroupList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public KeyGroupList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}