package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=promotion_id")
    public String promotionId;
    public GetListingSetPathParams withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}