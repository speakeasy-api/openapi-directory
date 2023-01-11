package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public ClcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("lino")
    public String lino;
    public ClcerRequestBodyCertificateParameters withLino(String lino) {
        this.lino = lino;
        return this;
    }
}