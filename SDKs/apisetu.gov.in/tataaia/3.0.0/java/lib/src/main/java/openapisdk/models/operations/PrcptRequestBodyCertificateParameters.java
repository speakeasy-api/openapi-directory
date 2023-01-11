package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrcptRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public PrcptRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PI_DOB")
    public String piDOB;
    public PrcptRequestBodyCertificateParameters withPiDob(String piDOB) {
        this.piDOB = piDOB;
        return this;
    }
    @JsonProperty("PI_FIN_YEAR")
    public String piFINYEAR;
    public PrcptRequestBodyCertificateParameters withPiFinYear(String piFINYEAR) {
        this.piFINYEAR = piFINYEAR;
        return this;
    }
    @JsonProperty("PI_POLICYNBR")
    public String piPOLICYNBR;
    public PrcptRequestBodyCertificateParameters withPiPolicynbr(String piPOLICYNBR) {
        this.piPOLICYNBR = piPOLICYNBR;
        return this;
    }
}