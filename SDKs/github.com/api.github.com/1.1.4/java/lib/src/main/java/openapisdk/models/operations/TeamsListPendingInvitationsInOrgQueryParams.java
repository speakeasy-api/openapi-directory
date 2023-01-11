package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListPendingInvitationsInOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListPendingInvitationsInOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListPendingInvitationsInOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}