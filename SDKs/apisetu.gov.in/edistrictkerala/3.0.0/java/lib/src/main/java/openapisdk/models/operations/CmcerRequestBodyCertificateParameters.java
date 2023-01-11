package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CmcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public CmcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public CmcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public CmcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}