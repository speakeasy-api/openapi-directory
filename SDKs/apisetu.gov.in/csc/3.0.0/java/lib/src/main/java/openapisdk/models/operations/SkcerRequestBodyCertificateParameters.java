package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SkcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("certificateType")
    public String certificateType;
    public SkcerRequestBodyCertificateParameters withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public SkcerRequestBodyCertificateParameters withUsername(String username) {
        this.username = username;
        return this;
    }
}