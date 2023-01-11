package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NrcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public NrcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public NrcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public NrcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}