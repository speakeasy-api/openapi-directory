package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListPublicKeysForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public UsersListPublicKeysForUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public UsersListPublicKeysForUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}