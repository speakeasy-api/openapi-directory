package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesUpdateRequest {
    public OpportunitiesUpdatePathParams pathParams;
    public OpportunitiesUpdateRequest withPathParams(OpportunitiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OpportunitiesUpdateQueryParams queryParams;
    public OpportunitiesUpdateRequest withQueryParams(OpportunitiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OpportunitiesUpdateHeaders headers;
    public OpportunitiesUpdateRequest withHeaders(OpportunitiesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OpportunityInput request;
    public OpportunitiesUpdateRequest withRequest(openapisdk.models.shared.OpportunityInput request) {
        this.request = request;
        return this;
    }
    public OpportunitiesUpdateSecurity security;
    public OpportunitiesUpdateRequest withSecurity(OpportunitiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}