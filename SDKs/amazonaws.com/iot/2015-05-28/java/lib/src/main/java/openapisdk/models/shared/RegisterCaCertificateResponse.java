package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterCaCertificateResponse
 * The output from the RegisterCACertificateResponse operation.
**/
public class RegisterCaCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public RegisterCaCertificateResponse withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public RegisterCaCertificateResponse withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}