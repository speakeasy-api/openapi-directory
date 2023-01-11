package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListChildQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListChildQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListChildQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}