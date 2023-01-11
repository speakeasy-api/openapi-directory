package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public IncerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("CERTNO")
    public String certno;
    public IncerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
}