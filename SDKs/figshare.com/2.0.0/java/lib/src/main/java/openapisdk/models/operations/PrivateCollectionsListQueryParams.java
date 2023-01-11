package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PrivateCollectionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public PrivateCollectionsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public PrivateCollectionsListOrderEnum order;
    public PrivateCollectionsListQueryParams withOrder(PrivateCollectionsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public PrivateCollectionsListOrderDirectionEnum orderDirection;
    public PrivateCollectionsListQueryParams withOrderDirection(PrivateCollectionsListOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PrivateCollectionsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PrivateCollectionsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}