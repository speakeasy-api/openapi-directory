package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChunkedUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uploadId")
    public String uploadId;
    public ChunkedUploadPathParams withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}