package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LhcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public LhcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public LhcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public LhcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}