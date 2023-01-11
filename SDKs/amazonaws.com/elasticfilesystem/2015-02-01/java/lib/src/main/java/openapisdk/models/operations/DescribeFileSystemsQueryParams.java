package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFileSystemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreationToken")
    public String creationToken;
    public DescribeFileSystemsQueryParams withCreationToken(String creationToken) {
        this.creationToken = creationToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FileSystemId")
    public String fileSystemId;
    public DescribeFileSystemsQueryParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public DescribeFileSystemsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public DescribeFileSystemsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}