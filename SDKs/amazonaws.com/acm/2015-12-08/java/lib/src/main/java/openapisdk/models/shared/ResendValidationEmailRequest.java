package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResendValidationEmailRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public ResendValidationEmailRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Domain")
    public String domain;
    public ResendValidationEmailRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("ValidationDomain")
    public String validationDomain;
    public ResendValidationEmailRequest withValidationDomain(String validationDomain) {
        this.validationDomain = validationDomain;
        return this;
    }
}