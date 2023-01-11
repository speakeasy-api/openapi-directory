package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public ListTagsForCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}