package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListIdpGroupsForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public TeamsListIdpGroupsForOrgQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListIdpGroupsForOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}