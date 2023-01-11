package openapisdk.models.shared;



/**
 * OriginSslProtocols
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
**/
public class OriginSslProtocols {
    public java.util.Map<String, Object>[] items;
    public OriginSslProtocols withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public OriginSslProtocols withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}