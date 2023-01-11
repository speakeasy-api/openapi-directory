package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public DpcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public DpcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public DpcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}