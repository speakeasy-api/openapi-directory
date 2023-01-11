package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBackupPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DescribeBackupPolicyPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}