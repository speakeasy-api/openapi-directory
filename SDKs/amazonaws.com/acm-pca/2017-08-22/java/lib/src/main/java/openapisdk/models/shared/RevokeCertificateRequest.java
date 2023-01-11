package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevokeCertificateRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public RevokeCertificateRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("CertificateSerial")
    public String certificateSerial;
    public RevokeCertificateRequest withCertificateSerial(String certificateSerial) {
        this.certificateSerial = certificateSerial;
        return this;
    }
    @JsonProperty("RevocationReason")
    public RevocationReasonEnum revocationReason;
    public RevokeCertificateRequest withRevocationReason(RevocationReasonEnum revocationReason) {
        this.revocationReason = revocationReason;
        return this;
    }
}