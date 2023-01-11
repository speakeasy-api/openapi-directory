package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTrafficMirrorFiltersActionEnum action;
    public PostDescribeTrafficMirrorFiltersQueryParams withAction(PostDescribeTrafficMirrorFiltersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTrafficMirrorFiltersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTrafficMirrorFiltersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTrafficMirrorFiltersVersionEnum version;
    public PostDescribeTrafficMirrorFiltersQueryParams withVersion(PostDescribeTrafficMirrorFiltersVersionEnum version) {
        this.version = version;
        return this;
    }
}