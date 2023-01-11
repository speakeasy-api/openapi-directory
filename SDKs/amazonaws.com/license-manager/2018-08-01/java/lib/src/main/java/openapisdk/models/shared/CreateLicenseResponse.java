package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public CreateLicenseResponse withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public LicenseStatusEnum status;
    public CreateLicenseResponse withStatus(LicenseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public CreateLicenseResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}