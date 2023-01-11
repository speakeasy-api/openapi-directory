package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public DeleteCertificateAuthorityRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermanentDeletionTimeInDays")
    public Long permanentDeletionTimeInDays;
    public DeleteCertificateAuthorityRequest withPermanentDeletionTimeInDays(Long permanentDeletionTimeInDays) {
        this.permanentDeletionTimeInDays = permanentDeletionTimeInDays;
        return this;
    }
}