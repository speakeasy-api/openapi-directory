package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFastSnapshotRestoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeFastSnapshotRestoresActionEnum action;
    public PostDescribeFastSnapshotRestoresQueryParams withAction(PostDescribeFastSnapshotRestoresActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeFastSnapshotRestoresQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeFastSnapshotRestoresQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeFastSnapshotRestoresVersionEnum version;
    public PostDescribeFastSnapshotRestoresQueryParams withVersion(PostDescribeFastSnapshotRestoresVersionEnum version) {
        this.version = version;
        return this;
    }
}