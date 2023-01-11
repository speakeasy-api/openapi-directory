package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TetmsRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TetmsRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public TetmsRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year_month")
    public String yearMonth;
    public TetmsRequestBodyCertificateParameters withYearMonth(String yearMonth) {
        this.yearMonth = yearMonth;
        return this;
    }
}