package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotVersionsRequest {
    public ListBotVersionsPathParams pathParams;
    public ListBotVersionsRequest withPathParams(ListBotVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBotVersionsQueryParams queryParams;
    public ListBotVersionsRequest withQueryParams(ListBotVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBotVersionsHeaders headers;
    public ListBotVersionsRequest withHeaders(ListBotVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListBotVersionsRequestBody request;
    public ListBotVersionsRequest withRequest(ListBotVersionsRequestBody request) {
        this.request = request;
        return this;
    }
}