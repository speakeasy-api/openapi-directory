package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListUsersQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;
    public ListUsersQueryParams withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}