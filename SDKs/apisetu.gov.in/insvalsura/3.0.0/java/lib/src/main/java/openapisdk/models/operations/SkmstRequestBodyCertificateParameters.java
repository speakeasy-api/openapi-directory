package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkmstRequestBodyCertificateParameters {
    @JsonProperty("coursename")
    public String coursename;
    public SkmstRequestBodyCertificateParameters withCoursename(String coursename) {
        this.coursename = coursename;
        return this;
    }
    @JsonProperty("personalno")
    public String personalno;
    public SkmstRequestBodyCertificateParameters withPersonalno(String personalno) {
        this.personalno = personalno;
        return this;
    }
    @JsonProperty("unit")
    public String unit;
    public SkmstRequestBodyCertificateParameters withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}