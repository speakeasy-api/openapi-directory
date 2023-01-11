package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RvcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RvcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public RvcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("chasis_no")
    public String chasisNo;
    public RvcerRequestBodyCertificateParameters withChasisNo(String chasisNo) {
        this.chasisNo = chasisNo;
        return this;
    }
    @JsonProperty("reg_no")
    public String regNo;
    public RvcerRequestBodyCertificateParameters withRegNo(String regNo) {
        this.regNo = regNo;
        return this;
    }
}