package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseManagerReportGeneratorRequest {
    public DeleteLicenseManagerReportGeneratorHeaders headers;
    public DeleteLicenseManagerReportGeneratorRequest withHeaders(DeleteLicenseManagerReportGeneratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLicenseManagerReportGeneratorRequest request;
    public DeleteLicenseManagerReportGeneratorRequest withRequest(openapisdk.models.shared.DeleteLicenseManagerReportGeneratorRequest request) {
        this.request = request;
        return this;
    }
}