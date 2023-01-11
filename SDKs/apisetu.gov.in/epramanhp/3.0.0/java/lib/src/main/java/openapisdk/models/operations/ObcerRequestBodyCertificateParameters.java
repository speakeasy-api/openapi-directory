package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObcerRequestBodyCertificateParameters {
    @JsonProperty("Name")
    public String name;
    public ObcerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ObcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
}