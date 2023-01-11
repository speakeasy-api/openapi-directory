package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public IncerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public IncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}