package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TetcrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TetcrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public TetcrRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year_month")
    public String yearMonth;
    public TetcrRequestBodyCertificateParameters withYearMonth(String yearMonth) {
        this.yearMonth = yearMonth;
        return this;
    }
}