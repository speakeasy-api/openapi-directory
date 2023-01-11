package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsGetMembershipsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public TeamsGetMembershipsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public TeamsGetMembershipsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderType")
    public String orderType;
    public TeamsGetMembershipsQueryParams withOrderType(String orderType) {
        this.orderType = orderType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public TeamsGetMembershipsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}