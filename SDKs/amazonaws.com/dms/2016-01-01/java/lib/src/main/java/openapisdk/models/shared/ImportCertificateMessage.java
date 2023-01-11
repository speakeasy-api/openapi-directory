package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportCertificateMessage {
    @JsonProperty("CertificateIdentifier")
    public String certificateIdentifier;
    public ImportCertificateMessage withCertificateIdentifier(String certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificatePem")
    public String certificatePem;
    public ImportCertificateMessage withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateWallet")
    public String certificateWallet;
    public ImportCertificateMessage withCertificateWallet(String certificateWallet) {
        this.certificateWallet = certificateWallet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ImportCertificateMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}