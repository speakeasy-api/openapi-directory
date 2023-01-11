package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;
    public GetTagKeysQueryParams withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}