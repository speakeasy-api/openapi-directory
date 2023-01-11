package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CtcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public CtcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public CtcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}