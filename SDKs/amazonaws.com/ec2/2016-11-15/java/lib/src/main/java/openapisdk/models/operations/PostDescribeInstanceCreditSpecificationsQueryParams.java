package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceCreditSpecificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceCreditSpecificationsActionEnum action;
    public PostDescribeInstanceCreditSpecificationsQueryParams withAction(PostDescribeInstanceCreditSpecificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeInstanceCreditSpecificationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeInstanceCreditSpecificationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceCreditSpecificationsVersionEnum version;
    public PostDescribeInstanceCreditSpecificationsQueryParams withVersion(PostDescribeInstanceCreditSpecificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}