package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileSystemPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DeleteFileSystemPolicyPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}