package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public IncerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public IncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public IncerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}