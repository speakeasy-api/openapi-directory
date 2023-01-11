package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayListenerTlsCertificate
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
public class VirtualGatewayListenerTlsCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acm")
    public VirtualGatewayListenerTlsAcmCertificate acm;
    public VirtualGatewayListenerTlsCertificate withAcm(VirtualGatewayListenerTlsAcmCertificate acm) {
        this.acm = acm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public VirtualGatewayListenerTlsFileCertificate file;
    public VirtualGatewayListenerTlsCertificate withFile(VirtualGatewayListenerTlsFileCertificate file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public VirtualGatewayListenerTlsSdsCertificate sds;
    public VirtualGatewayListenerTlsCertificate withSds(VirtualGatewayListenerTlsSdsCertificate sds) {
        this.sds = sds;
        return this;
    }
}