package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}