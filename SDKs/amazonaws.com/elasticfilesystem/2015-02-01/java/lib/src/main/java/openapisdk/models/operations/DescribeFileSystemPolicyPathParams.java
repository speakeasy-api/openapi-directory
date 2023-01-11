package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFileSystemPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DescribeFileSystemPolicyPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}