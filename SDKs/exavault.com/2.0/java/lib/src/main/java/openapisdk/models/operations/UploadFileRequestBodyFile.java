package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadFileRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadFileRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}