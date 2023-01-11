package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdcrdRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public AdcrdRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public AdcrdRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("ExamYear")
    public String examYear;
    public AdcrdRequestBodyCertificateParameters withExamYear(String examYear) {
        this.examYear = examYear;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public AdcrdRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}