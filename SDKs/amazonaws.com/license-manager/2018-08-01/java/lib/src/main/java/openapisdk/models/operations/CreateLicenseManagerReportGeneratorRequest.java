package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseManagerReportGeneratorRequest {
    public CreateLicenseManagerReportGeneratorHeaders headers;
    public CreateLicenseManagerReportGeneratorRequest withHeaders(CreateLicenseManagerReportGeneratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLicenseManagerReportGeneratorRequest request;
    public CreateLicenseManagerReportGeneratorRequest withRequest(openapisdk.models.shared.CreateLicenseManagerReportGeneratorRequest request) {
        this.request = request;
        return this;
    }
}