package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public CvcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("VCNo")
    public String vcNo;
    public CvcerRequestBodyCertificateParameters withVcNo(String vcNo) {
        this.vcNo = vcNo;
        return this;
    }
}