package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTagsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}