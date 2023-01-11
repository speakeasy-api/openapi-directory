package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PecerRequestBodyCertificateParameters {
    @JsonProperty("AC_NO")
    public String acNO;
    public PecerRequestBodyCertificateParameters withAcNo(String acNO) {
        this.acNO = acNO;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public PecerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
}