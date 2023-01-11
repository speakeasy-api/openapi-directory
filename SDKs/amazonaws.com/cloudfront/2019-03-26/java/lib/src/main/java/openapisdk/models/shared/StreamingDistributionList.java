package openapisdk.models.shared;



/**
 * StreamingDistributionList
 * A streaming distribution list. 
**/
public class StreamingDistributionList {
    public Boolean isTruncated;
    public StreamingDistributionList withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public StreamingDistributionSummaryList[] items;
    public StreamingDistributionList withItems(StreamingDistributionSummaryList[] items) {
        this.items = items;
        return this;
    }
    public String marker;
    public StreamingDistributionList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long maxItems;
    public StreamingDistributionList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public StreamingDistributionList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public StreamingDistributionList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}