package openapisdk.models.shared;



/**
 * PublicKeyList
 * A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
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