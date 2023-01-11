package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryResultsRequest {
    public GetQueryResultsHeaders headers;
    public GetQueryResultsRequest withHeaders(GetQueryResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetQueryResultsRequest request;
    public GetQueryResultsRequest withRequest(openapisdk.models.shared.GetQueryResultsRequest request) {
        this.request = request;
        return this;
    }
}