package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public ObcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public ObcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}