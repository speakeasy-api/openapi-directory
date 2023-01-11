package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayListenerTlsAcmCertificate
 * An object that represents an Certificate Manager certificate.
**/
public class VirtualGatewayListenerTlsAcmCertificate {
    @JsonProperty("certificateArn")
    public String certificateArn;
    public VirtualGatewayListenerTlsAcmCertificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}