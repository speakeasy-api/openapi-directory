package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DscerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public DscerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public DscerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public DscerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}