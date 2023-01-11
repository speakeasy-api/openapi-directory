package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseManagerReportGeneratorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseManagerReportGeneratorArn")
    public String licenseManagerReportGeneratorArn;
    public CreateLicenseManagerReportGeneratorResponse withLicenseManagerReportGeneratorArn(String licenseManagerReportGeneratorArn) {
        this.licenseManagerReportGeneratorArn = licenseManagerReportGeneratorArn;
        return this;
    }
}