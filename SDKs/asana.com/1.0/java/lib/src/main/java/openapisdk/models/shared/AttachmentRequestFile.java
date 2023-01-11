package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachmentRequestFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public AttachmentRequestFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public AttachmentRequestFile withFile(String file) {
        this.file = file;
        return this;
    }
}