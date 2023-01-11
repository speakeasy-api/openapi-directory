package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MncerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public MncerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public MncerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public MncerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}