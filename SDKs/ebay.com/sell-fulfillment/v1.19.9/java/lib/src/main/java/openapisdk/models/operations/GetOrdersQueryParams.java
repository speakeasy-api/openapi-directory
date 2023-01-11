package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldGroups")
    public String fieldGroups;
    public GetOrdersQueryParams withFieldGroups(String fieldGroups) {
        this.fieldGroups = fieldGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetOrdersQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetOrdersQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetOrdersQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderIds")
    public String orderIds;
    public GetOrdersQueryParams withOrderIds(String orderIds) {
        this.orderIds = orderIds;
        return this;
    }
}