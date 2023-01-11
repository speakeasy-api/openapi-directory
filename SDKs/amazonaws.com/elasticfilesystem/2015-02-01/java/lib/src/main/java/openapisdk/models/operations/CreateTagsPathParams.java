package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileSystemId")
    public String fileSystemId;
    public CreateTagsPathParams withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
}