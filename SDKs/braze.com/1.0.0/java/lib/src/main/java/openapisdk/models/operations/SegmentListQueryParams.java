package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SegmentListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public SegmentListQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public SegmentListQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}