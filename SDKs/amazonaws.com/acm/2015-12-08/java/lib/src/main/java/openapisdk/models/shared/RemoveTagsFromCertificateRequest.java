package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveTagsFromCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public RemoveTagsFromCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public RemoveTagsFromCertificateRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}