package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteItemPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public DeleteItemPromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}