package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLicenseRequest {
    @JsonProperty("LicenseArn")
    public String licenseArn;
    public DeleteLicenseRequest withLicenseArn(String licenseArn) {
        this.licenseArn = licenseArn;
        return this;
    }
    @JsonProperty("SourceVersion")
    public String sourceVersion;
    public DeleteLicenseRequest withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
}