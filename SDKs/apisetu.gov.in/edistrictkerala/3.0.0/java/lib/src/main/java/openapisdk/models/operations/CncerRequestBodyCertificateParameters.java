package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CncerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public CncerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public CncerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public CncerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}