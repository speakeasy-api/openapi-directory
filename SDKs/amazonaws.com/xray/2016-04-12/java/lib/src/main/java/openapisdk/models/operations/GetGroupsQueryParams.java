package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}