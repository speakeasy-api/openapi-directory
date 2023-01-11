package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IdcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public IdcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public IdcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public IdcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}