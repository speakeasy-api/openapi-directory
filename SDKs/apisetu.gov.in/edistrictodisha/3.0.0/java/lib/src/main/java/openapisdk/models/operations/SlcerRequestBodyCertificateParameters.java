package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SlcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public SlcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public SlcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}