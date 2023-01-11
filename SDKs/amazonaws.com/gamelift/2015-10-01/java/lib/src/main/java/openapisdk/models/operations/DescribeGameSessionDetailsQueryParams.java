package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeGameSessionDetailsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeGameSessionDetailsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}