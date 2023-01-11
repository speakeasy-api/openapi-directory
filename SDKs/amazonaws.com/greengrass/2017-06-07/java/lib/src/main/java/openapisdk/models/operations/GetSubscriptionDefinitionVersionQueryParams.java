package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionDefinitionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetSubscriptionDefinitionVersionQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}