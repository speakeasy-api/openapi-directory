package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBehaviorsRequestBodyAttachmentFile {
    @SpeakeasyMetadata("multipartForm:name=attachment_file")
    public String attachmentFile;
    public PostBehaviorsRequestBodyAttachmentFile withAttachmentFile(String attachmentFile) {
        this.attachmentFile = attachmentFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostBehaviorsRequestBodyAttachmentFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}