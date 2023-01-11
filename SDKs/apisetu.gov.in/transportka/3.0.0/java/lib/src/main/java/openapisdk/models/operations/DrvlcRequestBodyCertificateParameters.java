package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DrvlcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public DrvlcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public DrvlcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("dlno")
    public String dlno;
    public DrvlcRequestBodyCertificateParameters withDlno(String dlno) {
        this.dlno = dlno;
        return this;
    }
}