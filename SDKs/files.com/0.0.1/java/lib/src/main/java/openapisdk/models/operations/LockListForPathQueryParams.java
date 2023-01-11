package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LockListForPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public LockListForPathQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_children")
    public Boolean includeChildren;
    public LockListForPathQueryParams withIncludeChildren(Boolean includeChildren) {
        this.includeChildren = includeChildren;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public LockListForPathQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}