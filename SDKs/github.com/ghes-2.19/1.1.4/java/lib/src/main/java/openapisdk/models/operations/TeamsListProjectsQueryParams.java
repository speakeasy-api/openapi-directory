package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListProjectsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListProjectsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}