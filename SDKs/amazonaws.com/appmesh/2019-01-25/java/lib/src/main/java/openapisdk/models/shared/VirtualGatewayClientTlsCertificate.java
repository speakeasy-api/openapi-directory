package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayClientTlsCertificate
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
**/
public class VirtualGatewayClientTlsCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public VirtualGatewayListenerTlsFileCertificate file;
    public VirtualGatewayClientTlsCertificate withFile(VirtualGatewayListenerTlsFileCertificate file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public VirtualGatewayListenerTlsSdsCertificate sds;
    public VirtualGatewayClientTlsCertificate withSds(VirtualGatewayListenerTlsSdsCertificate sds) {
        this.sds = sds;
        return this;
    }
}