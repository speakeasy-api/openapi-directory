package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VhtaxRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public VhtaxRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public VhtaxRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("chasis_no")
    public String chasisNo;
    public VhtaxRequestBodyCertificateParameters withChasisNo(String chasisNo) {
        this.chasisNo = chasisNo;
        return this;
    }
    @JsonProperty("reg_no")
    public String regNo;
    public VhtaxRequestBodyCertificateParameters withRegNo(String regNo) {
        this.regNo = regNo;
        return this;
    }
    @JsonProperty("swd_name")
    public String swdName;
    public VhtaxRequestBodyCertificateParameters withSwdName(String swdName) {
        this.swdName = swdName;
        return this;
    }
}