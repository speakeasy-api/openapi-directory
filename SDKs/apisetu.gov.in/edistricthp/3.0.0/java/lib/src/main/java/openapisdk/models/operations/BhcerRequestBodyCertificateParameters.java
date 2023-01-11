package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BhcerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public BhcerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}