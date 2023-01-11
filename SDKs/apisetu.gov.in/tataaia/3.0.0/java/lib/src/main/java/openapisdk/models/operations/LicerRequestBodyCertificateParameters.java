package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public LicerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UDF1")
    public String udf1;
    public LicerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
    @JsonProperty("UDF2")
    public String udf2;
    public LicerRequestBodyCertificateParameters withUdf2(String udf2) {
        this.udf2 = udf2;
        return this;
    }
}