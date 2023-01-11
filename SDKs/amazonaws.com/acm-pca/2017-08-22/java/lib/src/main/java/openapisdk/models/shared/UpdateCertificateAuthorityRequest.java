package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public UpdateCertificateAuthorityRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevocationConfiguration")
    public RevocationConfiguration revocationConfiguration;
    public UpdateCertificateAuthorityRequest withRevocationConfiguration(RevocationConfiguration revocationConfiguration) {
        this.revocationConfiguration = revocationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public CertificateAuthorityStatusEnum status;
    public UpdateCertificateAuthorityRequest withStatus(CertificateAuthorityStatusEnum status) {
        this.status = status;
        return this;
    }
}