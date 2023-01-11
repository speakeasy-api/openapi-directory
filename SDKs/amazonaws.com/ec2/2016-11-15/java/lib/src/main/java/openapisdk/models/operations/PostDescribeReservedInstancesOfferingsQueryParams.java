package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedInstancesOfferingsActionEnum action;
    public PostDescribeReservedInstancesOfferingsQueryParams withAction(PostDescribeReservedInstancesOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeReservedInstancesOfferingsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeReservedInstancesOfferingsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedInstancesOfferingsVersionEnum version;
    public PostDescribeReservedInstancesOfferingsQueryParams withVersion(PostDescribeReservedInstancesOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}