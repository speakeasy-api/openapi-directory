package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotPriceHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotPriceHistoryActionEnum action;
    public PostDescribeSpotPriceHistoryQueryParams withAction(PostDescribeSpotPriceHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeSpotPriceHistoryQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeSpotPriceHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotPriceHistoryVersionEnum version;
    public PostDescribeSpotPriceHistoryQueryParams withVersion(PostDescribeSpotPriceHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}