package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RacerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public RacerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public RacerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}