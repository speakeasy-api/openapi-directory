package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DccerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public DccerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public DccerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}