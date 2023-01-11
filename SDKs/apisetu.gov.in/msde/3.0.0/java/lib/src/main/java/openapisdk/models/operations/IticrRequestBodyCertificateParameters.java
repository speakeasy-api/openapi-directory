package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IticrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public IticrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public IticrRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
}