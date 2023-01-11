package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LhcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public LhcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public LhcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}