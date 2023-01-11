package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListMembersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListMembersQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.TeamIdEnum1 role;
    public TeamsListMembersQueryParams withRole(openapisdk.models.shared.TeamIdEnum1 role) {
        this.role = role;
        return this;
    }
}