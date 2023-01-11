package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MncerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public MncerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public MncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}