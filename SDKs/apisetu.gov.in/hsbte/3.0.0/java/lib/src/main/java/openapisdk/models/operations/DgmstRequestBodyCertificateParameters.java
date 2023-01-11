package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgmstRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DgmstRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public DgmstRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("SEM")
    public String sem;
    public DgmstRequestBodyCertificateParameters withSem(String sem) {
        this.sem = sem;
        return this;
    }
}