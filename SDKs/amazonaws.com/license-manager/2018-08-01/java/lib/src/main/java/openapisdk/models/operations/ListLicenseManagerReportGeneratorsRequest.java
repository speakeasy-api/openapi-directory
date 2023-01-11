package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseManagerReportGeneratorsRequest {
    public ListLicenseManagerReportGeneratorsHeaders headers;
    public ListLicenseManagerReportGeneratorsRequest withHeaders(ListLicenseManagerReportGeneratorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLicenseManagerReportGeneratorsRequest request;
    public ListLicenseManagerReportGeneratorsRequest withRequest(openapisdk.models.shared.ListLicenseManagerReportGeneratorsRequest request) {
        this.request = request;
        return this;
    }
}