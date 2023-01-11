package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageGetFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public StorageGetFilePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}