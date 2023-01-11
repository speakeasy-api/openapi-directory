package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnomaliesForInsightRequest {
    public ListAnomaliesForInsightPathParams pathParams;
    public ListAnomaliesForInsightRequest withPathParams(ListAnomaliesForInsightPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAnomaliesForInsightQueryParams queryParams;
    public ListAnomaliesForInsightRequest withQueryParams(ListAnomaliesForInsightQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnomaliesForInsightHeaders headers;
    public ListAnomaliesForInsightRequest withHeaders(ListAnomaliesForInsightHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAnomaliesForInsightRequestBody request;
    public ListAnomaliesForInsightRequest withRequest(ListAnomaliesForInsightRequestBody request) {
        this.request = request;
        return this;
    }
}