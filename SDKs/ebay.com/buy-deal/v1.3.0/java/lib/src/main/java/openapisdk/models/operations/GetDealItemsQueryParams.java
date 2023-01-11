package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category_ids")
    public String categoryIds;
    public GetDealItemsQueryParams withCategoryIds(String categoryIds) {
        this.categoryIds = categoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=commissionable")
    public String commissionable;
    public GetDealItemsQueryParams withCommissionable(String commissionable) {
        this.commissionable = commissionable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delivery_country")
    public String deliveryCountry;
    public GetDealItemsQueryParams withDeliveryCountry(String deliveryCountry) {
        this.deliveryCountry = deliveryCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetDealItemsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetDealItemsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}