package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPlatformVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPlatformVersionsActionEnum action;
    public PostListPlatformVersionsQueryParams withAction(PostListPlatformVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostListPlatformVersionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListPlatformVersionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPlatformVersionsVersionEnum version;
    public PostListPlatformVersionsQueryParams withVersion(PostListPlatformVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}