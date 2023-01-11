package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAttachmentsToSetRequest {
    public AddAttachmentsToSetHeaders headers;
    public AddAttachmentsToSetRequest withHeaders(AddAttachmentsToSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddAttachmentsToSetRequest request;
    public AddAttachmentsToSetRequest withRequest(openapisdk.models.shared.AddAttachmentsToSetRequest request) {
        this.request = request;
        return this;
    }
}