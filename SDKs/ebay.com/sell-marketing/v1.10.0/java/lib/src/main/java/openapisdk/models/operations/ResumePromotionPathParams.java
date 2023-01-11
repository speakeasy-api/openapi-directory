package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumePromotionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public ResumePromotionPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}