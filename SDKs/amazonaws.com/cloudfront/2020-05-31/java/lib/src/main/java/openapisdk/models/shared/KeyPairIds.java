package openapisdk.models.shared;



/**
 * KeyPairIds
 * A list of CloudFront key pair identifiers.
**/
public class KeyPairIds {
    public java.util.Map<String, Object>[] items;
    public KeyPairIds withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public KeyPairIds withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}