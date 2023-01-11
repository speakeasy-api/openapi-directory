package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateItemPriceMarkdownPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public UpdateItemPriceMarkdownPromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}