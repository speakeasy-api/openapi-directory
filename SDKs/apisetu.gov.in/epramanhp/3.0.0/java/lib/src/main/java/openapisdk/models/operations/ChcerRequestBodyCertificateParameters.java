package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public ChcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ChcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}