package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DelcsRequestBodyCertificateParameters {
    @JsonProperty("applicationNo")
    public String applicationNo;
    public DelcsRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("licenseNo")
    public String licenseNo;
    public DelcsRequestBodyCertificateParameters withLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
        return this;
    }
}