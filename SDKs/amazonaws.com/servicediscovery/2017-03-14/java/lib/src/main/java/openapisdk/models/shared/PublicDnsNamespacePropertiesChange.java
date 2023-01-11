package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublicDnsNamespacePropertiesChange
 * Updated properties for the public DNS namespace.
**/
public class PublicDnsNamespacePropertiesChange {
    @JsonProperty("DnsProperties")
    public PublicDnsPropertiesMutableChange dnsProperties;
    public PublicDnsNamespacePropertiesChange withDnsProperties(PublicDnsPropertiesMutableChange dnsProperties) {
        this.dnsProperties = dnsProperties;
        return this;
    }
}