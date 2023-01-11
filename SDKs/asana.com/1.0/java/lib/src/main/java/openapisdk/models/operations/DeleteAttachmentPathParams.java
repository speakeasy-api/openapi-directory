package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAttachmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachment_gid")
    public String attachmentGid;
    public DeleteAttachmentPathParams withAttachmentGid(String attachmentGid) {
        this.attachmentGid = attachmentGid;
        return this;
    }
}