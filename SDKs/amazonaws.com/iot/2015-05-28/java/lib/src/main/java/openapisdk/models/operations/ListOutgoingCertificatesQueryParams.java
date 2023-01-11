package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOutgoingCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAscendingOrder")
    public Boolean isAscendingOrder;
    public ListOutgoingCertificatesQueryParams withIsAscendingOrder(Boolean isAscendingOrder) {
        this.isAscendingOrder = isAscendingOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListOutgoingCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListOutgoingCertificatesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}