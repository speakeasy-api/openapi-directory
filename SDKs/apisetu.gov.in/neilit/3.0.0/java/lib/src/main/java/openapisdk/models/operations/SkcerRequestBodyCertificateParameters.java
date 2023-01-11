package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SkcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SkcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UDF1")
    public String udf1;
    public SkcerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}