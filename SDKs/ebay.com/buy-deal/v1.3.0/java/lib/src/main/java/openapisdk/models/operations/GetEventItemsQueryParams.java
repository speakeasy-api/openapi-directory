package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category_ids")
    public String categoryIds;
    public GetEventItemsQueryParams withCategoryIds(String categoryIds) {
        this.categoryIds = categoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delivery_country")
    public String deliveryCountry;
    public GetEventItemsQueryParams withDeliveryCountry(String deliveryCountry) {
        this.deliveryCountry = deliveryCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_ids")
    public String eventIds;
    public GetEventItemsQueryParams withEventIds(String eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetEventItemsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetEventItemsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}