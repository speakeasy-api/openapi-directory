package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NtcerRequestBodyCertificateParameters {
    @JsonProperty("aplno")
    public String aplno;
    public NtcerRequestBodyCertificateParameters withAplno(String aplno) {
        this.aplno = aplno;
        return this;
    }
    @JsonProperty("certno")
    public String certno;
    public NtcerRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("sccd")
    public String sccd;
    public NtcerRequestBodyCertificateParameters withSccd(String sccd) {
        this.sccd = sccd;
        return this;
    }
}