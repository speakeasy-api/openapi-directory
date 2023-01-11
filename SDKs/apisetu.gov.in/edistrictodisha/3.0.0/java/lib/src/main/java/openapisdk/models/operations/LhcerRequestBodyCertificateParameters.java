package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LhcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public LhcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public LhcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}