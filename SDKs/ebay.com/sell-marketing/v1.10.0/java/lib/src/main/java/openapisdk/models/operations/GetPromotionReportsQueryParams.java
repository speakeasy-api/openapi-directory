package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPromotionReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetPromotionReportsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetPromotionReportsQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetPromotionReportsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=promotion_status")
    public String promotionStatus;
    public GetPromotionReportsQueryParams withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=promotion_type")
    public String promotionType;
    public GetPromotionReportsQueryParams withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetPromotionReportsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}