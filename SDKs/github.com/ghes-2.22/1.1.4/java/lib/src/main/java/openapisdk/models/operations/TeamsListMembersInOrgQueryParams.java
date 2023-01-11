package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListMembersInOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListMembersInOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListMembersInOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.TeamSlugEnum role;
    public TeamsListMembersInOrgQueryParams withRole(openapisdk.models.shared.TeamSlugEnum role) {
        this.role = role;
        return this;
    }
}