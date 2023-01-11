package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public CripcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("polno")
    public String polno;
    public CripcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
}