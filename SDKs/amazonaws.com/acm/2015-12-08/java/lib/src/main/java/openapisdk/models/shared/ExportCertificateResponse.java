package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public ExportCertificateResponse withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateChain")
    public String certificateChain;
    public ExportCertificateResponse withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKey")
    public String privateKey;
    public ExportCertificateResponse withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
}