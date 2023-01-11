package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNamedShadowsForThingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListNamedShadowsForThingQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListNamedShadowsForThingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}