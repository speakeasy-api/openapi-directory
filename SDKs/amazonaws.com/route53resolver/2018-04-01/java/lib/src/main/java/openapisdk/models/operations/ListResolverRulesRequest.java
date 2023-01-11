package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverRulesRequest {
    public ListResolverRulesQueryParams queryParams;
    public ListResolverRulesRequest withQueryParams(ListResolverRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverRulesHeaders headers;
    public ListResolverRulesRequest withHeaders(ListResolverRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverRulesRequest request;
    public ListResolverRulesRequest withRequest(openapisdk.models.shared.ListResolverRulesRequest request) {
        this.request = request;
        return this;
    }
}