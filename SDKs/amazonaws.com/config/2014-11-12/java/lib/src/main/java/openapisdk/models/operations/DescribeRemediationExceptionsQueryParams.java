package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRemediationExceptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeRemediationExceptionsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeRemediationExceptionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}