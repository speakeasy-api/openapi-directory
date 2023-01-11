package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RlcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public RlcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public RlcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public RlcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}