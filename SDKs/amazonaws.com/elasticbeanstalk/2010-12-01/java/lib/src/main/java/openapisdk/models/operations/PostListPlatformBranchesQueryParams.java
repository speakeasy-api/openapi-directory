package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPlatformBranchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPlatformBranchesActionEnum action;
    public PostListPlatformBranchesQueryParams withAction(PostListPlatformBranchesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostListPlatformBranchesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListPlatformBranchesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPlatformBranchesVersionEnum version;
    public PostListPlatformBranchesQueryParams withVersion(PostListPlatformBranchesVersionEnum version) {
        this.version = version;
        return this;
    }
}