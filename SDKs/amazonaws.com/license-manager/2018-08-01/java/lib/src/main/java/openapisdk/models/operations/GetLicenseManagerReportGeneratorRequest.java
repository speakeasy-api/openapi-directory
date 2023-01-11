package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseManagerReportGeneratorRequest {
    public GetLicenseManagerReportGeneratorHeaders headers;
    public GetLicenseManagerReportGeneratorRequest withHeaders(GetLicenseManagerReportGeneratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLicenseManagerReportGeneratorRequest request;
    public GetLicenseManagerReportGeneratorRequest withRequest(openapisdk.models.shared.GetLicenseManagerReportGeneratorRequest request) {
        this.request = request;
        return this;
    }
}