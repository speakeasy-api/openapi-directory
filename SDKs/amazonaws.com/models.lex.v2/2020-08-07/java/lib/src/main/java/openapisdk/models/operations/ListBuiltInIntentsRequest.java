package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuiltInIntentsRequest {
    public ListBuiltInIntentsPathParams pathParams;
    public ListBuiltInIntentsRequest withPathParams(ListBuiltInIntentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBuiltInIntentsQueryParams queryParams;
    public ListBuiltInIntentsRequest withQueryParams(ListBuiltInIntentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuiltInIntentsHeaders headers;
    public ListBuiltInIntentsRequest withHeaders(ListBuiltInIntentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListBuiltInIntentsRequestBody request;
    public ListBuiltInIntentsRequest withRequest(ListBuiltInIntentsRequestBody request) {
        this.request = request;
        return this;
    }
}