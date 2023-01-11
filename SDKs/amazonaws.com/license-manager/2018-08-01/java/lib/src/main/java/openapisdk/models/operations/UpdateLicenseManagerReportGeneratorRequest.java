package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseManagerReportGeneratorRequest {
    public UpdateLicenseManagerReportGeneratorHeaders headers;
    public UpdateLicenseManagerReportGeneratorRequest withHeaders(UpdateLicenseManagerReportGeneratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLicenseManagerReportGeneratorRequest request;
    public UpdateLicenseManagerReportGeneratorRequest withRequest(openapisdk.models.shared.UpdateLicenseManagerReportGeneratorRequest request) {
        this.request = request;
        return this;
    }
}