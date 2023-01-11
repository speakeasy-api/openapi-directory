package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EgipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public EgipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UDF1")
    public String udf1;
    public EgipcRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
    @JsonProperty("UDF2")
    public String udf2;
    public EgipcRequestBodyCertificateParameters withUdf2(String udf2) {
        this.udf2 = udf2;
        return this;
    }
    @JsonProperty("UDF3")
    public String udf3;
    public EgipcRequestBodyCertificateParameters withUdf3(String udf3) {
        this.udf3 = udf3;
        return this;
    }
}