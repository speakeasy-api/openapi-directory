package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DipcrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DipcrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RollNo")
    public String rollNo;
    public DipcrRequestBodyCertificateParameters withRollNo(String rollNo) {
        this.rollNo = rollNo;
        return this;
    }
}