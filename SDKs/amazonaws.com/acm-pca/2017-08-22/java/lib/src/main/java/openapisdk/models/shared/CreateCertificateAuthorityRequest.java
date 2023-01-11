package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityConfiguration")
    public CertificateAuthorityConfiguration certificateAuthorityConfiguration;
    public CreateCertificateAuthorityRequest withCertificateAuthorityConfiguration(CertificateAuthorityConfiguration certificateAuthorityConfiguration) {
        this.certificateAuthorityConfiguration = certificateAuthorityConfiguration;
        return this;
    }
    @JsonProperty("CertificateAuthorityType")
    public CertificateAuthorityTypeEnum certificateAuthorityType;
    public CreateCertificateAuthorityRequest withCertificateAuthorityType(CertificateAuthorityTypeEnum certificateAuthorityType) {
        this.certificateAuthorityType = certificateAuthorityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateCertificateAuthorityRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyStorageSecurityStandard")
    public KeyStorageSecurityStandardEnum keyStorageSecurityStandard;
    public CreateCertificateAuthorityRequest withKeyStorageSecurityStandard(KeyStorageSecurityStandardEnum keyStorageSecurityStandard) {
        this.keyStorageSecurityStandard = keyStorageSecurityStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevocationConfiguration")
    public RevocationConfiguration revocationConfiguration;
    public CreateCertificateAuthorityRequest withRevocationConfiguration(RevocationConfiguration revocationConfiguration) {
        this.revocationConfiguration = revocationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateCertificateAuthorityRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}