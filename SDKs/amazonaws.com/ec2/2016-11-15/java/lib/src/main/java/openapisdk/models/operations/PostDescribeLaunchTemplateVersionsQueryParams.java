package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchTemplateVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLaunchTemplateVersionsActionEnum action;
    public PostDescribeLaunchTemplateVersionsQueryParams withAction(PostDescribeLaunchTemplateVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLaunchTemplateVersionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLaunchTemplateVersionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLaunchTemplateVersionsVersionEnum version;
    public PostDescribeLaunchTemplateVersionsQueryParams withVersion(PostDescribeLaunchTemplateVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}