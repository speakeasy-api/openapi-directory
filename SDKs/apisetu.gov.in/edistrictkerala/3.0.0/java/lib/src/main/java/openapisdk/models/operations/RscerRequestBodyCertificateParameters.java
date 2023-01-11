package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RscerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public RscerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public RscerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public RscerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}