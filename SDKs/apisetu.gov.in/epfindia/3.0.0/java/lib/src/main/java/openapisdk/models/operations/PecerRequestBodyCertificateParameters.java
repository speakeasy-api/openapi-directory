package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PecerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PecerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("PPONO")
    public String ppono;
    public PecerRequestBodyCertificateParameters withPpono(String ppono) {
        this.ppono = ppono;
        return this;
    }
}