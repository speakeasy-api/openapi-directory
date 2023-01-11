package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LpgsvRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public LpgsvRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}