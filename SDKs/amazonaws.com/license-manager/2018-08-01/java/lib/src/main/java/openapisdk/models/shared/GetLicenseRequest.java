package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLicenseRequest {
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public GetLicenseRequest withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public GetLicenseRequest withVersion(String version) {
        this.version = version;
        return this;
    }
}