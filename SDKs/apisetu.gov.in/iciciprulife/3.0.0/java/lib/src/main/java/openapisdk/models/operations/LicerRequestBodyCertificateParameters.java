package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LicerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("policynumber")
    public String policynumber;
    public LicerRequestBodyCertificateParameters withPolicynumber(String policynumber) {
        this.policynumber = policynumber;
        return this;
    }
}