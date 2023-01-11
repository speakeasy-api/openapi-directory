package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterCertificateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificatePem")
    public String caCertificatePem;
    public RegisterCertificateRequestBody withCaCertificatePem(String caCertificatePem) {
        this.caCertificatePem = caCertificatePem;
        return this;
    }
    @JsonProperty("certificatePem")
    public String certificatePem;
    public RegisterCertificateRequestBody withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RegisterCertificateRequestBodyStatusEnum status;
    public RegisterCertificateRequestBody withStatus(RegisterCertificateRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}