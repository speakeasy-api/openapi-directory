package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadFileRequestBodyFile file;
    public UploadFileRequestBody withFile(UploadFileRequestBodyFile file) {
        this.file = file;
        return this;
    }
}