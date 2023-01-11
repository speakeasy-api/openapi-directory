package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NncerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public NncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}