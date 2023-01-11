package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFileSystemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public UpdateFileSystemPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}