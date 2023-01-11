package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListMembershipsForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public OrgsListMembershipsForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public OrgsListMembershipsForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public OrgsListMembershipsForAuthenticatedUserStateEnum state;
    public OrgsListMembershipsForAuthenticatedUserQueryParams withState(OrgsListMembershipsForAuthenticatedUserStateEnum state) {
        this.state = state;
        return this;
    }
}