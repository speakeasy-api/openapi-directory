package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverQueryLogConfigAssociationsRequest {
    public ListResolverQueryLogConfigAssociationsQueryParams queryParams;
    public ListResolverQueryLogConfigAssociationsRequest withQueryParams(ListResolverQueryLogConfigAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverQueryLogConfigAssociationsHeaders headers;
    public ListResolverQueryLogConfigAssociationsRequest withHeaders(ListResolverQueryLogConfigAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverQueryLogConfigAssociationsRequest request;
    public ListResolverQueryLogConfigAssociationsRequest withRequest(openapisdk.models.shared.ListResolverQueryLogConfigAssociationsRequest request) {
        this.request = request;
        return this;
    }
}