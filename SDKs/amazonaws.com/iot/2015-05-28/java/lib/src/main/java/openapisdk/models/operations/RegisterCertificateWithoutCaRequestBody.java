package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterCertificateWithoutCaRequestBody {
    @JsonProperty("certificatePem")
    public String certificatePem;
    public RegisterCertificateWithoutCaRequestBody withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RegisterCertificateWithoutCaRequestBodyStatusEnum status;
    public RegisterCertificateWithoutCaRequestBody withStatus(RegisterCertificateWithoutCaRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}