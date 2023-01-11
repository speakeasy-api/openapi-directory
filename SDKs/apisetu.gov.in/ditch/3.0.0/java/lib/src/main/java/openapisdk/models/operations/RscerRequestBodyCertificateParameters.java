package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RscerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public RscerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("CERTNO")
    public String certno;
    public RscerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
}