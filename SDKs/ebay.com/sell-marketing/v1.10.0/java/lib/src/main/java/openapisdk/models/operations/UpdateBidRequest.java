package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBidRequest {
    public UpdateBidPathParams pathParams;
    public UpdateBidRequest withPathParams(UpdateBidPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBidPercentageRequest request;
    public UpdateBidRequest withRequest(openapisdk.models.shared.UpdateBidPercentageRequest request) {
        this.request = request;
        return this;
    }
    public UpdateBidSecurity security;
    public UpdateBidRequest withSecurity(UpdateBidSecurity security) {
        this.security = security;
        return this;
    }
}