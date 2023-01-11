package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RmcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RmcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("regno")
    public String regno;
    public RmcerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("sro_id")
    public String sroId;
    public RmcerRequestBodyCertificateParameters withSroId(String sroId) {
        this.sroId = sroId;
        return this;
    }
    @JsonProperty("yr")
    public String yr;
    public RmcerRequestBodyCertificateParameters withYr(String yr) {
        this.yr = yr;
        return this;
    }
}