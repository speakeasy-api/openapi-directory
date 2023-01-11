package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageGetFileDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public StorageGetFileDownloadPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}