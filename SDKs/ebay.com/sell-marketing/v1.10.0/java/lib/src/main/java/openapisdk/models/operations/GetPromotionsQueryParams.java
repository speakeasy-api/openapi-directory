package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPromotionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetPromotionsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetPromotionsQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetPromotionsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=promotion_status")
    public String promotionStatus;
    public GetPromotionsQueryParams withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=promotion_type")
    public String promotionType;
    public GetPromotionsQueryParams withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetPromotionsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPromotionsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}