package openapisdk.models.shared;



/**
 * ActiveTrustedKeyGroups
 * A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
public class ActiveTrustedKeyGroups {
    public Boolean enabled;
    public ActiveTrustedKeyGroups withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public KgKeyPairIdsList[] items;
    public ActiveTrustedKeyGroups withItems(KgKeyPairIdsList[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public ActiveTrustedKeyGroups withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}