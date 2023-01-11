package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCertificateOptionsRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public UpdateCertificateOptionsRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Options")
    public CertificateOptions options;
    public UpdateCertificateOptionsRequest withOptions(CertificateOptions options) {
        this.options = options;
        return this;
    }
}