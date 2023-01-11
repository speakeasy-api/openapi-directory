package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPolicyPrincipalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListPolicyPrincipalsQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListPolicyPrincipalsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListPolicyPrincipalsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}