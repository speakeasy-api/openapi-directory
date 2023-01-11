package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EwcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public EwcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DSN")
    public String dsn;
    public EwcerRequestBodyCertificateParameters withDsn(String dsn) {
        this.dsn = dsn;
        return this;
    }
}