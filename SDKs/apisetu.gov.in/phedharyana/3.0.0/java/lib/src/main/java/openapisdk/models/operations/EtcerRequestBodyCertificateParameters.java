package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EtcerRequestBodyCertificateParameters {
    @JsonProperty("_unique_code")
    public String uniqueCode;
    public EtcerRequestBodyCertificateParameters withUniqueCode(String uniqueCode) {
        this.uniqueCode = uniqueCode;
        return this;
    }
}