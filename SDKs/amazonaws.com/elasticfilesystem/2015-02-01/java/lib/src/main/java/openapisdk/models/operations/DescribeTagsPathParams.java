package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DescribeTagsPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}