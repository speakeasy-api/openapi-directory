package openapisdk.models.shared;



/**
 * KeyPairIds
 * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
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