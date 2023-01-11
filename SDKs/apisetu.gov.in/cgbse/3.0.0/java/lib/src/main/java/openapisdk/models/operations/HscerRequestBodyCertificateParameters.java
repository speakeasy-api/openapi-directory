package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("examtype")
    public String examtype;
    public HscerRequestBodyCertificateParameters withExamtype(String examtype) {
        this.examtype = examtype;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public HscerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}