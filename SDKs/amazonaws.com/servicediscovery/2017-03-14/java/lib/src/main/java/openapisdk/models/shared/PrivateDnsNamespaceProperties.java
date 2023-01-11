package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivateDnsNamespaceProperties
 * DNS properties for the private DNS namespace.
**/
public class PrivateDnsNamespaceProperties {
    @JsonProperty("DnsProperties")
    public PrivateDnsPropertiesMutable dnsProperties;
    public PrivateDnsNamespaceProperties withDnsProperties(PrivateDnsPropertiesMutable dnsProperties) {
        this.dnsProperties = dnsProperties;
        return this;
    }
}