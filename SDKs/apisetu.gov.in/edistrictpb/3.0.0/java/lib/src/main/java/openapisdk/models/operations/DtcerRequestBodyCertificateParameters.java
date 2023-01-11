package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DtcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public DtcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("RegistrationID")
    public String registrationID;
    public DtcerRequestBodyCertificateParameters withRegistrationId(String registrationID) {
        this.registrationID = registrationID;
        return this;
    }
}