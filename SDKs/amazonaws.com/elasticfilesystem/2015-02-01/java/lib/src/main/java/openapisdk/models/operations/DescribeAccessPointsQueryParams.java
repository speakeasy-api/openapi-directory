package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccessPointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessPointId")
    public String accessPointId;
    public DescribeAccessPointsQueryParams withAccessPointId(String accessPointId) {
        this.accessPointId = accessPointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FileSystemId")
    public String fileSystemId;
    public DescribeAccessPointsQueryParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public DescribeAccessPointsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeAccessPointsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}