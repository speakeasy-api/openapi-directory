package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByChannelRequest {
    public GetStoreReportByChannelPathParams pathParams;
    public GetStoreReportByChannelRequest withPathParams(GetStoreReportByChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportByChannelRequest request;
    public GetStoreReportByChannelRequest withRequest(openapisdk.models.shared.ReportByChannelRequest request) {
        this.request = request;
        return this;
    }
}