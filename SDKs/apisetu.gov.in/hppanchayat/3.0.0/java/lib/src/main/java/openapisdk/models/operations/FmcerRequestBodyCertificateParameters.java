package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FmcerRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public FmcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}