package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MalcsRequestBodyCertificateParameters {
    @JsonProperty("applicationNo")
    public String applicationNo;
    public MalcsRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("licenseNo")
    public String licenseNo;
    public MalcsRequestBodyCertificateParameters withLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
        return this;
    }
}