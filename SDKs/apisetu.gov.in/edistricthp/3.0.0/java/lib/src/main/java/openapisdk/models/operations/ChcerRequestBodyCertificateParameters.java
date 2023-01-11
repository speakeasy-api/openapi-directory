package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChcerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public ChcerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}