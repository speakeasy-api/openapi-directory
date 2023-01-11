package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogExportationHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Integer pageNumber;
    public GetChannelCatalogExportationHistoryQueryParams withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetChannelCatalogExportationHistoryQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}