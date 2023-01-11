package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MrcerRequestBodyCertificateParameters {
    @JsonProperty("CERT_TYPE")
    public String certTYPE;
    public MrcerRequestBodyCertificateParameters withCertType(String certTYPE) {
        this.certTYPE = certTYPE;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public MrcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public MrcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
}