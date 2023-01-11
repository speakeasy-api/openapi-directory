package openapisdk.models.shared;



/**
 * DeliveryOptions
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
public class DeliveryOptions {
    public TlsPolicyEnum tlsPolicy;
    public DeliveryOptions withTlsPolicy(TlsPolicyEnum tlsPolicy) {
        this.tlsPolicy = tlsPolicy;
        return this;
    }
}