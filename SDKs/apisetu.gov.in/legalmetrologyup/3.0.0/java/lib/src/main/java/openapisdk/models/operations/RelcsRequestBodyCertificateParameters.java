package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RelcsRequestBodyCertificateParameters {
    @JsonProperty("applicationNo")
    public String applicationNo;
    public RelcsRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("licenseNo")
    public String licenseNo;
    public RelcsRequestBodyCertificateParameters withLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
        return this;
    }
}