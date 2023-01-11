package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public DpcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public DpcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}