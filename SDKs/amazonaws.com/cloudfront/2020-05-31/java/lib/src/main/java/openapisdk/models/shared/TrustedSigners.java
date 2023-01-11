package openapisdk.models.shared;



/**
 * TrustedSigners
 * A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
public class TrustedSigners {
    public Boolean enabled;
    public TrustedSigners withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public java.util.Map<String, Object>[] items;
    public TrustedSigners withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public TrustedSigners withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}