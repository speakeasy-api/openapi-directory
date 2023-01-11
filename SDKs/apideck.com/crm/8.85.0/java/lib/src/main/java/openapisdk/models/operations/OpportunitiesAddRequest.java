package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesAddRequest {
    public OpportunitiesAddQueryParams queryParams;
    public OpportunitiesAddRequest withQueryParams(OpportunitiesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OpportunitiesAddHeaders headers;
    public OpportunitiesAddRequest withHeaders(OpportunitiesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OpportunityInput request;
    public OpportunitiesAddRequest withRequest(openapisdk.models.shared.OpportunityInput request) {
        this.request = request;
        return this;
    }
    public OpportunitiesAddSecurity security;
    public OpportunitiesAddRequest withSecurity(OpportunitiesAddSecurity security) {
        this.security = security;
        return this;
    }
}