package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AgcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public AgcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public AgcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}