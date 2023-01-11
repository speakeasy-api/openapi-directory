package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCostEstimationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetCostEstimationQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}