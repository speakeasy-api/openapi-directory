package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UncrdRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public UncrdRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("UAN")
    public String uan;
    public UncrdRequestBodyCertificateParameters withUan(String uan) {
        this.uan = uan;
        return this;
    }
}