package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDeploymentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}