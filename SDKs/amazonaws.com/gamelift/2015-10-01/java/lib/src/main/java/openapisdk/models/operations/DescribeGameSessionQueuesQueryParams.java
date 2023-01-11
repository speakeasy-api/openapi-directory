package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionQueuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeGameSessionQueuesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeGameSessionQueuesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}