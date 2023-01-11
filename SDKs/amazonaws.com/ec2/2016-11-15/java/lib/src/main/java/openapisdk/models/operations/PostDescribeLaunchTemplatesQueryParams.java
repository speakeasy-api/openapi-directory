package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLaunchTemplatesActionEnum action;
    public PostDescribeLaunchTemplatesQueryParams withAction(PostDescribeLaunchTemplatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLaunchTemplatesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLaunchTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLaunchTemplatesVersionEnum version;
    public PostDescribeLaunchTemplatesQueryParams withVersion(PostDescribeLaunchTemplatesVersionEnum version) {
        this.version = version;
        return this;
    }
}