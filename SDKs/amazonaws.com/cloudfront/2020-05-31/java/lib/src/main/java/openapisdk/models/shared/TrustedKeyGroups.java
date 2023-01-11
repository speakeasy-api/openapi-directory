package openapisdk.models.shared;



/**
 * TrustedKeyGroups
 * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
public class TrustedKeyGroups {
    public Boolean enabled;
    public TrustedKeyGroups withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public java.util.Map<String, Object>[] items;
    public TrustedKeyGroups withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public TrustedKeyGroups withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}