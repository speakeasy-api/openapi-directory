package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStandardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public DescribeStandardsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeStandardsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}