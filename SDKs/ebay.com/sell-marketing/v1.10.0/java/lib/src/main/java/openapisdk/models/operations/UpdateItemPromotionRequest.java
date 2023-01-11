package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemPromotionRequest {
    public UpdateItemPromotionPathParams pathParams;
    public UpdateItemPromotionRequest withPathParams(UpdateItemPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPromotion request;
    public UpdateItemPromotionRequest withRequest(openapisdk.models.shared.ItemPromotion request) {
        this.request = request;
        return this;
    }
    public UpdateItemPromotionSecurity security;
    public UpdateItemPromotionRequest withSecurity(UpdateItemPromotionSecurity security) {
        this.security = security;
        return this;
    }
}