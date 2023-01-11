package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DtcerRequestBodyCertificateParameters {
    @JsonProperty("DATEOFDEATH")
    public String dateofdeath;
    public DtcerRequestBodyCertificateParameters withDateofdeath(String dateofdeath) {
        this.dateofdeath = dateofdeath;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public DtcerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
}