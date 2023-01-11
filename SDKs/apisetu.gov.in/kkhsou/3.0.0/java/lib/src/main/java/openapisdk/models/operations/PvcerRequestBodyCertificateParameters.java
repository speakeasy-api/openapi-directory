package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PvcerRequestBodyCertificateParameters {
    @JsonProperty("ENROL_NO")
    public String enrolNO;
    public PvcerRequestBodyCertificateParameters withEnrolNo(String enrolNO) {
        this.enrolNO = enrolNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PvcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public PvcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}