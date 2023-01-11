package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMatchmakingRuleSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeMatchmakingRuleSetsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeMatchmakingRuleSetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}