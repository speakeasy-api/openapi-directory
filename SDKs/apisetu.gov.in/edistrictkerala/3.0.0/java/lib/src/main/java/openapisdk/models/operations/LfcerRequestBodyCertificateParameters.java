package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LfcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public LfcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public LfcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public LfcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}