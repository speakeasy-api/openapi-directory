package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public Long fileId;
    public FileDownloadPathParams withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
}