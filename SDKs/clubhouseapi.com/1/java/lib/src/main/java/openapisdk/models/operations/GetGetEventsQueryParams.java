package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_filtered")
    public Boolean isFiltered;
    public GetGetEventsQueryParams withIsFiltered(Boolean isFiltered) {
        this.isFiltered = isFiltered;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetGetEventsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGetEventsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}