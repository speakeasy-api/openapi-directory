package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListForecastExportJobsRequest {
    public ListForecastExportJobsQueryParams queryParams;
    public ListForecastExportJobsRequest withQueryParams(ListForecastExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListForecastExportJobsHeaders headers;
    public ListForecastExportJobsRequest withHeaders(ListForecastExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListForecastExportJobsRequest request;
    public ListForecastExportJobsRequest withRequest(openapisdk.models.shared.ListForecastExportJobsRequest request) {
        this.request = request;
        return this;
    }
}