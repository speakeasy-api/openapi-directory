package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListPendingInvitationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public OrgsListPendingInvitationsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OrgsListPendingInvitationsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}