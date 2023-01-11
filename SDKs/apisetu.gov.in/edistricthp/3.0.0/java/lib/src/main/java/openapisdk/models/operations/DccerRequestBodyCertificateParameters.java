package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DccerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public DccerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}