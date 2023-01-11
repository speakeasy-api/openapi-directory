package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Ror1bRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public Ror1bRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("refno")
    public String refno;
    public Ror1bRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
}