package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeliverabilityTestReportRequest {
    public CreateDeliverabilityTestReportHeaders headers;
    public CreateDeliverabilityTestReportRequest withHeaders(CreateDeliverabilityTestReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDeliverabilityTestReportRequestBody request;
    public CreateDeliverabilityTestReportRequest withRequest(CreateDeliverabilityTestReportRequestBody request) {
        this.request = request;
        return this;
    }
}