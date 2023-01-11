package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageGetFileViewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public StorageGetFileViewPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}