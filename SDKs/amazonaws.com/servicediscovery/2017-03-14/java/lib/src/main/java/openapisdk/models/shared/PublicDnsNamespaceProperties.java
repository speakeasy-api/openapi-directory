package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicDnsNamespaceProperties
 * DNS properties for the public DNS namespace.
**/
public class PublicDnsNamespaceProperties {
    @JsonProperty("DnsProperties")
    public PublicDnsPropertiesMutable dnsProperties;
    public PublicDnsNamespaceProperties withDnsProperties(PublicDnsPropertiesMutable dnsProperties) {
        this.dnsProperties = dnsProperties;
        return this;
    }
}