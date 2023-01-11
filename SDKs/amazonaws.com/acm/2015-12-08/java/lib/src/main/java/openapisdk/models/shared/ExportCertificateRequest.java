package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExportCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public ExportCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Passphrase")
    public String passphrase;
    public ExportCertificateRequest withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
}