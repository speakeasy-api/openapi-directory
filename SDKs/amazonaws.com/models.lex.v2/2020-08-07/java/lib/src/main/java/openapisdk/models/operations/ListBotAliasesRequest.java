package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBotAliasesRequest {
    public ListBotAliasesPathParams pathParams;
    public ListBotAliasesRequest withPathParams(ListBotAliasesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBotAliasesQueryParams queryParams;
    public ListBotAliasesRequest withQueryParams(ListBotAliasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBotAliasesHeaders headers;
    public ListBotAliasesRequest withHeaders(ListBotAliasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListBotAliasesRequestBody request;
    public ListBotAliasesRequest withRequest(ListBotAliasesRequestBody request) {
        this.request = request;
        return this;
    }
}