package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScheduledInstanceAvailabilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeScheduledInstanceAvailabilityActionEnum action;
    public PostDescribeScheduledInstanceAvailabilityQueryParams withAction(PostDescribeScheduledInstanceAvailabilityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeScheduledInstanceAvailabilityQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeScheduledInstanceAvailabilityQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeScheduledInstanceAvailabilityVersionEnum version;
    public PostDescribeScheduledInstanceAvailabilityQueryParams withVersion(PostDescribeScheduledInstanceAvailabilityVersionEnum version) {
        this.version = version;
        return this;
    }
}