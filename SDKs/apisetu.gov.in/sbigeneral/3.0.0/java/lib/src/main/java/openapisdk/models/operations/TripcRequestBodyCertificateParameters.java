package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public TripcRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
    @JsonProperty("UDF2")
    public String udf2;
    public TripcRequestBodyCertificateParameters withUdf2(String udf2) {
        this.udf2 = udf2;
        return this;
    }
}