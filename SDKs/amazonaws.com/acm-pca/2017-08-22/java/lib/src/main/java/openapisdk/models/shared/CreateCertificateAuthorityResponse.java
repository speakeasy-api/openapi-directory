package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public CreateCertificateAuthorityResponse withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
}