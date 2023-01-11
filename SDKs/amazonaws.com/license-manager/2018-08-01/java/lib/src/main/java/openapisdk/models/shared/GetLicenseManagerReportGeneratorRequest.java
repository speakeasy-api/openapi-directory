package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLicenseManagerReportGeneratorRequest {
    @JsonProperty("LicenseManagerReportGeneratorArn")
    public String licenseManagerReportGeneratorArn;
    public GetLicenseManagerReportGeneratorRequest withLicenseManagerReportGeneratorArn(String licenseManagerReportGeneratorArn) {
        this.licenseManagerReportGeneratorArn = licenseManagerReportGeneratorArn;
        return this;
    }
}