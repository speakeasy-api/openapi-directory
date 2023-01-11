package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LpgtvRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public LpgtvRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}