package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public CertificateDetail certificate;
    public DescribeCertificateResponse withCertificate(CertificateDetail certificate) {
        this.certificate = certificate;
        return this;
    }
}