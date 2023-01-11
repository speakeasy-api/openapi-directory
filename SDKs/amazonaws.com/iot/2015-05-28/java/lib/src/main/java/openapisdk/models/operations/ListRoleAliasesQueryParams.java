package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoleAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListRoleAliasesQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListRoleAliasesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListRoleAliasesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}