package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public BtcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("RegistrationID")
    public String registrationID;
    public BtcerRequestBodyCertificateParameters withRegistrationId(String registrationID) {
        this.registrationID = registrationID;
        return this;
    }
}