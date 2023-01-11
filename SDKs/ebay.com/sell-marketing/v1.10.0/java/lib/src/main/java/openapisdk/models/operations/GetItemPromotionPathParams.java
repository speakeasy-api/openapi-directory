package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public GetItemPromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}