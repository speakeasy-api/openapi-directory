package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetPutConfigurationSetDeliveryOptionsDeliveryOptions
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
public class GetPutConfigurationSetDeliveryOptionsDeliveryOptions {
    @SpeakeasyMetadata("queryParam:name=TlsPolicy")
    public openapisdk.models.shared.TlsPolicyEnum tlsPolicy;
    public GetPutConfigurationSetDeliveryOptionsDeliveryOptions withTlsPolicy(openapisdk.models.shared.TlsPolicyEnum tlsPolicy) {
        this.tlsPolicy = tlsPolicy;
        return this;
    }
}