package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgcerRequestBodyCertificateParameters {
    @JsonProperty("DEGREE")
    public String degree;
    public DgcerRequestBodyCertificateParameters withDegree(String degree) {
        this.degree = degree;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public DgcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public DgcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
}