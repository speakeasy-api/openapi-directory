package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByCategoryRequest {
    public GetStoreReportByCategoryPathParams pathParams;
    public GetStoreReportByCategoryRequest withPathParams(GetStoreReportByCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportByCategoryRequest request;
    public GetStoreReportByCategoryRequest withRequest(openapisdk.models.shared.ReportByCategoryRequest request) {
        this.request = request;
        return this;
    }
}