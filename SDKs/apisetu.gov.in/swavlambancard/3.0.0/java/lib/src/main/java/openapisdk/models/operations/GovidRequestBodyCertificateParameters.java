package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("CERT_NO")
    public String certNO;
    public GovidRequestBodyCertificateParameters withCertNo(String certNO) {
        this.certNO = certNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}