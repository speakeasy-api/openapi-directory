package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageGetFilePreviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public StorageGetFilePreviewPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}