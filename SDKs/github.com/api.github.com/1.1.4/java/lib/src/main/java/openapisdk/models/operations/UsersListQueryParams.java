package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public UsersListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public UsersListQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}