package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlsfcRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public AlsfcRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("lino")
    public String lino;
    public AlsfcRequestBodyCertificateParameters withLino(String lino) {
        this.lino = lino;
        return this;
    }
}