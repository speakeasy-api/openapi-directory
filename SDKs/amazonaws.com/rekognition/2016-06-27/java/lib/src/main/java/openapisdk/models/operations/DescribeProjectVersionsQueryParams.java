package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public DescribeProjectVersionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeProjectVersionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}