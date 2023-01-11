package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnomalyGroupTimeSeriesRequest {
    public ListAnomalyGroupTimeSeriesQueryParams queryParams;
    public ListAnomalyGroupTimeSeriesRequest withQueryParams(ListAnomalyGroupTimeSeriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnomalyGroupTimeSeriesHeaders headers;
    public ListAnomalyGroupTimeSeriesRequest withHeaders(ListAnomalyGroupTimeSeriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAnomalyGroupTimeSeriesRequestBody request;
    public ListAnomalyGroupTimeSeriesRequest withRequest(ListAnomalyGroupTimeSeriesRequestBody request) {
        this.request = request;
        return this;
    }
}