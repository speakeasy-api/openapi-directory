package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public ImcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public ImcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public ImcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}