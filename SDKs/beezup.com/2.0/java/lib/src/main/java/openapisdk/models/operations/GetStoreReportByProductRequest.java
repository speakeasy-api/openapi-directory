package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByProductRequest {
    public GetStoreReportByProductPathParams pathParams;
    public GetStoreReportByProductRequest withPathParams(GetStoreReportByProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportByProductRequest request;
    public GetStoreReportByProductRequest withRequest(openapisdk.models.shared.ReportByProductRequest request) {
        this.request = request;
        return this;
    }
}