package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrfndRequestBodyCertificateParameters {
    @JsonProperty("AC_NO")
    public String acNO;
    public PrfndRequestBodyCertificateParameters withAcNo(String acNO) {
        this.acNO = acNO;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public PrfndRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
}