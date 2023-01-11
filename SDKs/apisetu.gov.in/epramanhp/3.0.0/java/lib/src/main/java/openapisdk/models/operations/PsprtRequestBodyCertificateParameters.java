package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PsprtRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public PsprtRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public PsprtRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}