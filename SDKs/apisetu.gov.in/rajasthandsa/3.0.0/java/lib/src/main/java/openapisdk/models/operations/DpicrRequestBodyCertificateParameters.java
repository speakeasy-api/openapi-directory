package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpicrRequestBodyCertificateParameters {
    @JsonProperty("UDF1")
    public String udf1;
    public DpicrRequestBodyCertificateParameters withUdf1(String udf1) {
        this.udf1 = udf1;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public DpicrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}