package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateAuthority")
    public CertificateAuthority certificateAuthority;
    public DescribeCertificateAuthorityResponse withCertificateAuthority(CertificateAuthority certificateAuthority) {
        this.certificateAuthority = certificateAuthority;
        return this;
    }
}