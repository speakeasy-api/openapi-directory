package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitAttachmentStateChangesRequest {
    public SubmitAttachmentStateChangesHeaders headers;
    public SubmitAttachmentStateChangesRequest withHeaders(SubmitAttachmentStateChangesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitAttachmentStateChangesRequest request;
    public SubmitAttachmentStateChangesRequest withRequest(openapisdk.models.shared.SubmitAttachmentStateChangesRequest request) {
        this.request = request;
        return this;
    }
}