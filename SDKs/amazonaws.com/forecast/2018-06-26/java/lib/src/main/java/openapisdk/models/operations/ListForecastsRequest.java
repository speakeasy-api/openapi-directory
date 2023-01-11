package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListForecastsRequest {
    public ListForecastsQueryParams queryParams;
    public ListForecastsRequest withQueryParams(ListForecastsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListForecastsHeaders headers;
    public ListForecastsRequest withHeaders(ListForecastsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListForecastsRequest request;
    public ListForecastsRequest withRequest(openapisdk.models.shared.ListForecastsRequest request) {
        this.request = request;
        return this;
    }
}