package openapisdk.models.shared;



/**
 * InvalidationList
 * The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
public class InvalidationList {
    public Boolean isTruncated;
    public InvalidationList withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public InvalidationSummaryList[] items;
    public InvalidationList withItems(InvalidationSummaryList[] items) {
        this.items = items;
        return this;
    }
    public String marker;
    public InvalidationList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long maxItems;
    public InvalidationList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public InvalidationList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public InvalidationList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}