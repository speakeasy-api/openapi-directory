package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAliasesRequest {
    public ListAliasesQueryParams queryParams;
    public ListAliasesRequest withQueryParams(ListAliasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAliasesHeaders headers;
    public ListAliasesRequest withHeaders(ListAliasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAliasesRequest request;
    public ListAliasesRequest withRequest(openapisdk.models.shared.ListAliasesRequest request) {
        this.request = request;
        return this;
    }
}