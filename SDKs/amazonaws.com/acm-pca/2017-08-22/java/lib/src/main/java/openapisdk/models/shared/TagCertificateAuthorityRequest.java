package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public TagCertificateAuthorityRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagCertificateAuthorityRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}