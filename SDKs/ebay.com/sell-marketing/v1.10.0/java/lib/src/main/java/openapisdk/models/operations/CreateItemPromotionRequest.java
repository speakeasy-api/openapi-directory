package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemPromotionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPromotion request;
    public CreateItemPromotionRequest withRequest(openapisdk.models.shared.ItemPromotion request) {
        this.request = request;
        return this;
    }
    public CreateItemPromotionSecurity security;
    public CreateItemPromotionRequest withSecurity(CreateItemPromotionSecurity security) {
        this.security = security;
        return this;
    }
}