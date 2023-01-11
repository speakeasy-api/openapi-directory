package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLicenseManagerReportGeneratorRequest {
    @JsonProperty("LicenseManagerReportGeneratorArn")
    public String licenseManagerReportGeneratorArn;
    public DeleteLicenseManagerReportGeneratorRequest withLicenseManagerReportGeneratorArn(String licenseManagerReportGeneratorArn) {
        this.licenseManagerReportGeneratorArn = licenseManagerReportGeneratorArn;
        return this;
    }
}