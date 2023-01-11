package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverQueryLogConfigsRequest {
    public ListResolverQueryLogConfigsQueryParams queryParams;
    public ListResolverQueryLogConfigsRequest withQueryParams(ListResolverQueryLogConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverQueryLogConfigsHeaders headers;
    public ListResolverQueryLogConfigsRequest withHeaders(ListResolverQueryLogConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverQueryLogConfigsRequest request;
    public ListResolverQueryLogConfigsRequest withRequest(openapisdk.models.shared.ListResolverQueryLogConfigsRequest request) {
        this.request = request;
        return this;
    }
}