package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public HpcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("regno")
    public String regno;
    public HpcerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public HpcerRequestBodyCertificateParameters withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}