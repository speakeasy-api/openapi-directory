package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileSystemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public DeleteFileSystemPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}