package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BhcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public BhcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public BhcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}