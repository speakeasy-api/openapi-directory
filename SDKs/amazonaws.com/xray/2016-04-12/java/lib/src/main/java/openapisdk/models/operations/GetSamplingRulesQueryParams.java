package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSamplingRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetSamplingRulesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}