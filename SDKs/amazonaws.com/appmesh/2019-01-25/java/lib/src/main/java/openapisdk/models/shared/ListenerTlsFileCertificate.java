package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListenerTlsFileCertificate
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
**/
public class ListenerTlsFileCertificate {
    @JsonProperty("certificateChain")
    public String certificateChain;
    public ListenerTlsFileCertificate withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
    @JsonProperty("privateKey")
    public String privateKey;
    public ListenerTlsFileCertificate withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
}