package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FolderListForPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public FolderListForPathQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public FolderListForPathQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public FolderListForPathQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview_size")
    public String previewSize;
    public FolderListForPathQueryParams withPreviewSize(String previewSize) {
        this.previewSize = previewSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public FolderListForPathQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_all")
    public Boolean searchAll;
    public FolderListForPathQueryParams withSearchAll(Boolean searchAll) {
        this.searchAll = searchAll;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_previews")
    public Boolean withPreviews;
    public FolderListForPathQueryParams withWithPreviews(Boolean withPreviews) {
        this.withPreviews = withPreviews;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with_priority_color")
    public Boolean withPriorityColor;
    public FolderListForPathQueryParams withWithPriorityColor(Boolean withPriorityColor) {
        this.withPriorityColor = withPriorityColor;
        return this;
    }
}