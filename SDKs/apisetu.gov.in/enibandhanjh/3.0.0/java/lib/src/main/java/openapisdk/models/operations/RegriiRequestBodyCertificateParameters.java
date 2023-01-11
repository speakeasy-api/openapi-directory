package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegriiRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RegriiRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("regno")
    public String regno;
    public RegriiRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("sro_id")
    public String sroId;
    public RegriiRequestBodyCertificateParameters withSroId(String sroId) {
        this.sroId = sroId;
        return this;
    }
    @JsonProperty("yr")
    public String yr;
    public RegriiRequestBodyCertificateParameters withYr(String yr) {
        this.yr = yr;
        return this;
    }
}