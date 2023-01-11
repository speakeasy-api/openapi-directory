package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PausePromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public PausePromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}