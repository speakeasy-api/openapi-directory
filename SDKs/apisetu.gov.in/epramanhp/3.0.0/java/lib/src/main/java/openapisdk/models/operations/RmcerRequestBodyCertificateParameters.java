package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RmcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public RmcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public RmcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}