package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DmcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public DmcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public DmcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public DmcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}