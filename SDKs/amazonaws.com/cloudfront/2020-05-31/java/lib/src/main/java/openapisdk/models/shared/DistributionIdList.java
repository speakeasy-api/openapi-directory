package openapisdk.models.shared;



/**
 * DistributionIdList
 * A list of distribution IDs.
**/
public class DistributionIdList {
    public Boolean isTruncated;
    public DistributionIdList withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public java.util.Map<String, Object>[] items;
    public DistributionIdList withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public String marker;
    public DistributionIdList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long maxItems;
    public DistributionIdList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public DistributionIdList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public DistributionIdList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}