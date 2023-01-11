package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListMembersLegacyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListMembersLegacyQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListMembersLegacyQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.TeamIdEnum role;
    public TeamsListMembersLegacyQueryParams withRole(openapisdk.models.shared.TeamIdEnum role) {
        this.role = role;
        return this;
    }
}