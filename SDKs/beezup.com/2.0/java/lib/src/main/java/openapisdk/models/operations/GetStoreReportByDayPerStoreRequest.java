package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByDayPerStoreRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportByDayRequest request;
    public GetStoreReportByDayPerStoreRequest withRequest(openapisdk.models.shared.ReportByDayRequest request) {
        this.request = request;
        return this;
    }
}