package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("coursename")
    public String coursename;
    public SkcerRequestBodyCertificateParameters withCoursename(String coursename) {
        this.coursename = coursename;
        return this;
    }
    @JsonProperty("personalno")
    public String personalno;
    public SkcerRequestBodyCertificateParameters withPersonalno(String personalno) {
        this.personalno = personalno;
        return this;
    }
    @JsonProperty("unit")
    public String unit;
    public SkcerRequestBodyCertificateParameters withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}