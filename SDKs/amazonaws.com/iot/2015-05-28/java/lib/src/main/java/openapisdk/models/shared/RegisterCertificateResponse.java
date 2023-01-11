package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterCertificateResponse
 * The output from the RegisterCertificate operation.
**/
public class RegisterCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public RegisterCertificateResponse withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public RegisterCertificateResponse withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}