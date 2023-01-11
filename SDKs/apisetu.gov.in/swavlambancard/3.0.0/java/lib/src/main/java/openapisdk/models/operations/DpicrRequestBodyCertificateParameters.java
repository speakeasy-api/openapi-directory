package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpicrRequestBodyCertificateParameters {
    @JsonProperty("CERT_NO")
    public String certNO;
    public DpicrRequestBodyCertificateParameters withCertNo(String certNO) {
        this.certNO = certNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public DpicrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}