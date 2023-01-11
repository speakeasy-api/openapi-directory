package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterCaCertificateRequestBody {
    @JsonProperty("caCertificate")
    public String caCertificate;
    public RegisterCaCertificateRequestBody withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationConfig")
    public RegisterCaCertificateRequestBodyRegistrationConfig registrationConfig;
    public RegisterCaCertificateRequestBody withRegistrationConfig(RegisterCaCertificateRequestBodyRegistrationConfig registrationConfig) {
        this.registrationConfig = registrationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public RegisterCaCertificateRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("verificationCertificate")
    public String verificationCertificate;
    public RegisterCaCertificateRequestBody withVerificationCertificate(String verificationCertificate) {
        this.verificationCertificate = verificationCertificate;
        return this;
    }
}