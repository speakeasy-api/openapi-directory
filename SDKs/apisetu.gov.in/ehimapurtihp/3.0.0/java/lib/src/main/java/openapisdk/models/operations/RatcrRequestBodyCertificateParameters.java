package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RatcrRequestBodyCertificateParameters {
    @JsonProperty("UID")
    public String uid;
    public RatcrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}