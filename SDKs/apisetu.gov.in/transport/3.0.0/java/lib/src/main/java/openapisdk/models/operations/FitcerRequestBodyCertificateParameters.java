package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FitcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public FitcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public FitcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("chasis_no")
    public String chasisNo;
    public FitcerRequestBodyCertificateParameters withChasisNo(String chasisNo) {
        this.chasisNo = chasisNo;
        return this;
    }
    @JsonProperty("reg_no")
    public String regNo;
    public FitcerRequestBodyCertificateParameters withRegNo(String regNo) {
        this.regNo = regNo;
        return this;
    }
    @JsonProperty("swd_name")
    public String swdName;
    public FitcerRequestBodyCertificateParameters withSwdName(String swdName) {
        this.swdName = swdName;
        return this;
    }
}