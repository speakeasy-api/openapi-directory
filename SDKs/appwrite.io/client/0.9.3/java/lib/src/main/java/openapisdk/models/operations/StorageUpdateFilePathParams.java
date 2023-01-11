package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageUpdateFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public StorageUpdateFilePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}