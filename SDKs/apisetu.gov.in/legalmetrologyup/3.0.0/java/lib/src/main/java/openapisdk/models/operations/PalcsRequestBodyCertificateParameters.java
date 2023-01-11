package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PalcsRequestBodyCertificateParameters {
    @JsonProperty("applicationNo")
    public String applicationNo;
    public PalcsRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("licenseNo")
    public String licenseNo;
    public PalcsRequestBodyCertificateParameters withLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
        return this;
    }
}