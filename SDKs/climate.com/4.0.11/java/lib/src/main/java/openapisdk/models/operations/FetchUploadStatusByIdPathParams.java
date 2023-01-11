package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUploadStatusByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uploadId")
    public String uploadId;
    public FetchUploadStatusByIdPathParams withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}