package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemPriceMarkdownPromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public GetItemPriceMarkdownPromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}