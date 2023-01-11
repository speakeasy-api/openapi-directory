package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FfcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public FfcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public FfcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}