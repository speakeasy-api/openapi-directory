package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RmcerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public RmcerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("CERTNO")
    public String certno;
    public RmcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
}