package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportGroupTrendRequest {
    public GetReportGroupTrendHeaders headers;
    public GetReportGroupTrendRequest withHeaders(GetReportGroupTrendHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetReportGroupTrendInput request;
    public GetReportGroupTrendRequest withRequest(openapisdk.models.shared.GetReportGroupTrendInput request) {
        this.request = request;
        return this;
    }
}