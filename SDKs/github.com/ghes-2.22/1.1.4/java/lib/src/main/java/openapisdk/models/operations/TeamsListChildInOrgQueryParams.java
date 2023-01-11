package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListChildInOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListChildInOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListChildInOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}