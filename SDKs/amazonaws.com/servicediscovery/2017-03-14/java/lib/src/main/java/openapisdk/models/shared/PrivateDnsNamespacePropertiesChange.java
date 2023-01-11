package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivateDnsNamespacePropertiesChange
 * Updated properties for the private DNS namespace.
**/
public class PrivateDnsNamespacePropertiesChange {
    @JsonProperty("DnsProperties")
    public PrivateDnsPropertiesMutableChange dnsProperties;
    public PrivateDnsNamespacePropertiesChange withDnsProperties(PrivateDnsPropertiesMutableChange dnsProperties) {
        this.dnsProperties = dnsProperties;
        return this;
    }
}