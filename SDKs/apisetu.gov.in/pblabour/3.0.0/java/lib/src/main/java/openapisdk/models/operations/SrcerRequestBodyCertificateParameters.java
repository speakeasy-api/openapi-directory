package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SrcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public SrcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("lino")
    public String lino;
    public SrcerRequestBodyCertificateParameters withLino(String lino) {
        this.lino = lino;
        return this;
    }
}