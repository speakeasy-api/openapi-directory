package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ArcmwRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public ArcmwRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
}