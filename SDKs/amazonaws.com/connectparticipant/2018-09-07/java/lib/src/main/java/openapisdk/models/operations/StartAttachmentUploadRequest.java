package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartAttachmentUploadRequest {
    public StartAttachmentUploadHeaders headers;
    public StartAttachmentUploadRequest withHeaders(StartAttachmentUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartAttachmentUploadRequestBody request;
    public StartAttachmentUploadRequest withRequest(StartAttachmentUploadRequestBody request) {
        this.request = request;
        return this;
    }
}