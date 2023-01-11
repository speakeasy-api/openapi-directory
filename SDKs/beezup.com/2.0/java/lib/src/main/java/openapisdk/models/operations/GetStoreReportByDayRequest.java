package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByDayRequest {
    public GetStoreReportByDayPathParams pathParams;
    public GetStoreReportByDayRequest withPathParams(GetStoreReportByDayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportByDayRequest request;
    public GetStoreReportByDayRequest withRequest(openapisdk.models.shared.ReportByDayRequest request) {
        this.request = request;
        return this;
    }
}