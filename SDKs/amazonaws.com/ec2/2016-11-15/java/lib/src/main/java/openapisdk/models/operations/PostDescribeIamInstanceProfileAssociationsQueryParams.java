package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIamInstanceProfileAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeIamInstanceProfileAssociationsActionEnum action;
    public PostDescribeIamInstanceProfileAssociationsQueryParams withAction(PostDescribeIamInstanceProfileAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeIamInstanceProfileAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeIamInstanceProfileAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeIamInstanceProfileAssociationsVersionEnum version;
    public PostDescribeIamInstanceProfileAssociationsQueryParams withVersion(PostDescribeIamInstanceProfileAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}