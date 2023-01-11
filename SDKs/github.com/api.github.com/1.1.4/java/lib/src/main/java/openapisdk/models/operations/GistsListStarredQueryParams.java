package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsListStarredQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GistsListStarredQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GistsListStarredQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public GistsListStarredQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}