package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListCertificatesQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListCertificatesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}