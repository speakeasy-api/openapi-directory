package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EpfscRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public EpfscRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public EpfscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("SCNO")
    public String scno;
    public EpfscRequestBodyCertificateParameters withScno(String scno) {
        this.scno = scno;
        return this;
    }
}