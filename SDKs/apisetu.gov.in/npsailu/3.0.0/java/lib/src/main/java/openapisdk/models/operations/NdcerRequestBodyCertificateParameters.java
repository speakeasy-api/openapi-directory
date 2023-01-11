package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NdcerRequestBodyCertificateParameters {
    @JsonProperty("appid")
    public String appid;
    public NdcerRequestBodyCertificateParameters withAppid(String appid) {
        this.appid = appid;
        return this;
    }
}