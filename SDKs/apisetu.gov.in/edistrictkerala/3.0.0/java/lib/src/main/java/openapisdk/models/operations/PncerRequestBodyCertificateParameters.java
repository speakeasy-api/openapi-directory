package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PncerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public PncerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public PncerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public PncerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}