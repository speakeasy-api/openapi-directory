package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterCertificateResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateId")
    public String certificateId;
    public RegisterCertificateResult withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}