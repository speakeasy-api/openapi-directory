package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAttachmentForTaskRequest {
    public CreateAttachmentForTaskPathParams pathParams;
    public CreateAttachmentForTaskRequest withPathParams(CreateAttachmentForTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateAttachmentForTaskQueryParams queryParams;
    public CreateAttachmentForTaskRequest withQueryParams(CreateAttachmentForTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.AttachmentRequest request;
    public CreateAttachmentForTaskRequest withRequest(openapisdk.models.shared.AttachmentRequest request) {
        this.request = request;
        return this;
    }
}