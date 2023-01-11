package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public DescribeEventsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeEventsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}