package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCanariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public DescribeCanariesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeCanariesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}