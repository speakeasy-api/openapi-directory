package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public ShcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ShcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}