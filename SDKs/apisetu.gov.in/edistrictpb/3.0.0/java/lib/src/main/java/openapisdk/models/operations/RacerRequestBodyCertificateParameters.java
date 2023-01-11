package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RacerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public RacerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DSN")
    public String dsn;
    public RacerRequestBodyCertificateParameters withDsn(String dsn) {
        this.dsn = dsn;
        return this;
    }
}