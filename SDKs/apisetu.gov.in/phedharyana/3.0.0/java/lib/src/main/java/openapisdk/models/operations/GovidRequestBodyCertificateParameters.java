package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("_uniqueid")
    public String uniqueid;
    public GovidRequestBodyCertificateParameters withUniqueid(String uniqueid) {
        this.uniqueid = uniqueid;
        return this;
    }
}