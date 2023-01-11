package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WwcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public WwcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public WwcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public WwcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}