package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public BtcerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}