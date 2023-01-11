package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public UntagCertificateAuthorityRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public UntagCertificateAuthorityRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}