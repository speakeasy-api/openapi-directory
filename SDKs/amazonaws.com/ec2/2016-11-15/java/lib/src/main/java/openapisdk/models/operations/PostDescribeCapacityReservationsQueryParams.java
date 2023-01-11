package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCapacityReservationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCapacityReservationsActionEnum action;
    public PostDescribeCapacityReservationsQueryParams withAction(PostDescribeCapacityReservationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeCapacityReservationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeCapacityReservationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCapacityReservationsVersionEnum version;
    public PostDescribeCapacityReservationsQueryParams withVersion(PostDescribeCapacityReservationsVersionEnum version) {
        this.version = version;
        return this;
    }
}