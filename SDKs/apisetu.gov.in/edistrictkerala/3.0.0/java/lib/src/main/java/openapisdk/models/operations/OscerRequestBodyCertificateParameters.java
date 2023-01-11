package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OscerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public OscerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public OscerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public OscerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}