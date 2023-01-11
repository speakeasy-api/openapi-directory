package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateContentAttachmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=content_reference_id")
    public Long contentReferenceId;
    public AppsCreateContentAttachmentPathParams withContentReferenceId(Long contentReferenceId) {
        this.contentReferenceId = contentReferenceId;
        return this;
    }
}