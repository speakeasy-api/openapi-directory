package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListContactsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListContactsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}