package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RsbycRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public RsbycRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}