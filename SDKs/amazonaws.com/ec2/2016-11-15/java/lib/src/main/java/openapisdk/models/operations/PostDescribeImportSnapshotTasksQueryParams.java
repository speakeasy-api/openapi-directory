package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeImportSnapshotTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeImportSnapshotTasksActionEnum action;
    public PostDescribeImportSnapshotTasksQueryParams withAction(PostDescribeImportSnapshotTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeImportSnapshotTasksQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeImportSnapshotTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeImportSnapshotTasksVersionEnum version;
    public PostDescribeImportSnapshotTasksQueryParams withVersion(PostDescribeImportSnapshotTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}