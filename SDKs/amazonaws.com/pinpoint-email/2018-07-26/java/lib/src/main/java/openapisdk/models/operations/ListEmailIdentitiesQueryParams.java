package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEmailIdentitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListEmailIdentitiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEmailIdentitiesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}