package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPrincipalPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListPrincipalPoliciesQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListPrincipalPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListPrincipalPoliciesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}