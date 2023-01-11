package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LocerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public LocerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public LocerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public LocerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}