package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBehaviorsIdRequestBodyAttachmentFile {
    @SpeakeasyMetadata("multipartForm:name=attachment_file")
    public String attachmentFile;
    public PatchBehaviorsIdRequestBodyAttachmentFile withAttachmentFile(String attachmentFile) {
        this.attachmentFile = attachmentFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchBehaviorsIdRequestBodyAttachmentFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}