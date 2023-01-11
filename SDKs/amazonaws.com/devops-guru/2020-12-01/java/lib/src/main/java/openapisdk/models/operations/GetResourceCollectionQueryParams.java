package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetResourceCollectionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}