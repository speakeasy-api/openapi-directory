package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagValuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;
    public GetTagValuesQueryParams withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}