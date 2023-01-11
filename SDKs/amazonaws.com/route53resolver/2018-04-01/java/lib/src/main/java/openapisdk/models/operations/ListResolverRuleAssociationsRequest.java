package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverRuleAssociationsRequest {
    public ListResolverRuleAssociationsQueryParams queryParams;
    public ListResolverRuleAssociationsRequest withQueryParams(ListResolverRuleAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverRuleAssociationsHeaders headers;
    public ListResolverRuleAssociationsRequest withHeaders(ListResolverRuleAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverRuleAssociationsRequest request;
    public ListResolverRuleAssociationsRequest withRequest(openapisdk.models.shared.ListResolverRuleAssociationsRequest request) {
        this.request = request;
        return this;
    }
}