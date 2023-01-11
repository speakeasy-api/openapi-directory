package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CanvasListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_archived")
    public String includeArchived;
    public CanvasListQueryParams withIncludeArchived(String includeArchived) {
        this.includeArchived = includeArchived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_edit.time[gt]")
    public String lastEditTimeGt;
    public CanvasListQueryParams withLastEditTimeGt(String lastEditTimeGt) {
        this.lastEditTimeGt = lastEditTimeGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public CanvasListQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public CanvasListQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}