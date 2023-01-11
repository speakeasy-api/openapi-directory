package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EwcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public EwcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public EwcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}