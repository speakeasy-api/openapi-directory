package openapisdk.models.shared;



/**
 * PublicKeyList
 * A list of public keys you've added to CloudFront to use with features like field-level encryption.
**/
public class PublicKeyList {
    public PublicKeySummaryList[] items;
    public PublicKeyList withItems(PublicKeySummaryList[] items) {
        this.items = items;
        return this;
    }
    public Long maxItems;
    public PublicKeyList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public PublicKeyList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public PublicKeyList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}