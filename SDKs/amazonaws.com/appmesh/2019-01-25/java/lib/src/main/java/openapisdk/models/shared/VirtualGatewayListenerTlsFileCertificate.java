package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayListenerTlsFileCertificate
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
**/
public class VirtualGatewayListenerTlsFileCertificate {
    @JsonProperty("certificateChain")
    public String certificateChain;
    public VirtualGatewayListenerTlsFileCertificate withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
    @JsonProperty("privateKey")
    public String privateKey;
    public VirtualGatewayListenerTlsFileCertificate withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
}