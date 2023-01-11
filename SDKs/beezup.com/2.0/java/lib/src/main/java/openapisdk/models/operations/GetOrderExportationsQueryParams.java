package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderExportationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Integer pageNumber;
    public GetOrderExportationsQueryParams withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetOrderExportationsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetOrderExportationsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}