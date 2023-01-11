package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PrivateProjectsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public PrivateProjectsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public PrivateProjectsListOrderEnum order;
    public PrivateProjectsListQueryParams withOrder(PrivateProjectsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_direction")
    public PrivateProjectsListOrderDirectionEnum orderDirection;
    public PrivateProjectsListQueryParams withOrderDirection(PrivateProjectsListOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PrivateProjectsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PrivateProjectsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roles")
    public String roles;
    public PrivateProjectsListQueryParams withRoles(String roles) {
        this.roles = roles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storage")
    public PrivateProjectsListStorageEnum storage;
    public PrivateProjectsListQueryParams withStorage(PrivateProjectsListStorageEnum storage) {
        this.storage = storage;
        return this;
    }
}