package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BacerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public BacerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public BacerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}