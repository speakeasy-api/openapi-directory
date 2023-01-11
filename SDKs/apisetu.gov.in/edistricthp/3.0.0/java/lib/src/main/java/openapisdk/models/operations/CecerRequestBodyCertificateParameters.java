package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CecerRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public CecerRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}