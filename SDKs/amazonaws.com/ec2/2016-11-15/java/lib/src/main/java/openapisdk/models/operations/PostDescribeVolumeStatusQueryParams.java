package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumeStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVolumeStatusActionEnum action;
    public PostDescribeVolumeStatusQueryParams withAction(PostDescribeVolumeStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVolumeStatusQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVolumeStatusQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVolumeStatusVersionEnum version;
    public PostDescribeVolumeStatusQueryParams withVersion(PostDescribeVolumeStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}