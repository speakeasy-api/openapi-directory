package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHostReservationOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeHostReservationOfferingsActionEnum action;
    public PostDescribeHostReservationOfferingsQueryParams withAction(PostDescribeHostReservationOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeHostReservationOfferingsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeHostReservationOfferingsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeHostReservationOfferingsVersionEnum version;
    public PostDescribeHostReservationOfferingsQueryParams withVersion(PostDescribeHostReservationOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}