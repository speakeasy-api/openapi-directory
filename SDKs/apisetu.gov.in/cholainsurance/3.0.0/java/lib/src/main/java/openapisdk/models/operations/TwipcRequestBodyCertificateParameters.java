package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public TwipcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("polno")
    public String polno;
    public TwipcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
}