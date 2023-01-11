package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SicrdRequestBodyCertificateParameters {
    @JsonProperty("CERTNO")
    public String certno;
    public SicrdRequestBodyCertificateParameters withCertno(String certno) {
        this.certno = certno;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SicrdRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
}