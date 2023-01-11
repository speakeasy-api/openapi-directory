package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsToCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public AddTagsToCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public AddTagsToCertificateRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}