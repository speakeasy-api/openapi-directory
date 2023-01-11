package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RatcrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RatcrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public RatcrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}