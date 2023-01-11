package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHomeRegionControlsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public DescribeHomeRegionControlsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeHomeRegionControlsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}