package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VochseRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public VochseRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public VochseRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Regno")
    public String regno;
    public VochseRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("Year")
    public String year;
    public VochseRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public VochseRequestBodyCertificateParameters withType(String type) {
        this.type = type;
        return this;
    }
}