package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryForecastRequest {
    public QueryForecastHeaders headers;
    public QueryForecastRequest withHeaders(QueryForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryForecastRequest request;
    public QueryForecastRequest withRequest(openapisdk.models.shared.QueryForecastRequest request) {
        this.request = request;
        return this;
    }
}