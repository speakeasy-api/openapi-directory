package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryResultsRequest {
    public GetQueryResultsQueryParams queryParams;
    public GetQueryResultsRequest withQueryParams(GetQueryResultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQueryResultsHeaders headers;
    public GetQueryResultsRequest withHeaders(GetQueryResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetQueryResultsInput request;
    public GetQueryResultsRequest withRequest(openapisdk.models.shared.GetQueryResultsInput request) {
        this.request = request;
        return this;
    }
}