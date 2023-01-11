package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShcerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public ShcerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}