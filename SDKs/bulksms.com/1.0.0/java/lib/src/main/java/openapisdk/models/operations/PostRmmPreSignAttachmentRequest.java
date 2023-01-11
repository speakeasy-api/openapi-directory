package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRmmPreSignAttachmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PreSignRequest request;
    public PostRmmPreSignAttachmentRequest withRequest(openapisdk.models.shared.PreSignRequest request) {
        this.request = request;
        return this;
    }
    public PostRmmPreSignAttachmentSecurity security;
    public PostRmmPreSignAttachmentRequest withSecurity(PostRmmPreSignAttachmentSecurity security) {
        this.security = security;
        return this;
    }
}