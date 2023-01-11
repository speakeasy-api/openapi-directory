package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamespaceProperties
 * A complex type that contains information that's specific to the namespace type.
**/
public class NamespaceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsProperties")
    public DnsProperties dnsProperties;
    public NamespaceProperties withDnsProperties(DnsProperties dnsProperties) {
        this.dnsProperties = dnsProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpProperties")
    public HttpProperties httpProperties;
    public NamespaceProperties withHttpProperties(HttpProperties httpProperties) {
        this.httpProperties = httpProperties;
        return this;
    }
}