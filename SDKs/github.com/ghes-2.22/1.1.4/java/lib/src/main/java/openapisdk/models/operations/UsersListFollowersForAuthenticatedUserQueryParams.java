package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListFollowersForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public UsersListFollowersForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public UsersListFollowersForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}