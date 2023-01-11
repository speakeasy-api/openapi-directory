package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPredictorBacktestExportJobsRequest {
    public ListPredictorBacktestExportJobsQueryParams queryParams;
    public ListPredictorBacktestExportJobsRequest withQueryParams(ListPredictorBacktestExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPredictorBacktestExportJobsHeaders headers;
    public ListPredictorBacktestExportJobsRequest withHeaders(ListPredictorBacktestExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPredictorBacktestExportJobsRequest request;
    public ListPredictorBacktestExportJobsRequest withRequest(openapisdk.models.shared.ListPredictorBacktestExportJobsRequest request) {
        this.request = request;
        return this;
    }
}