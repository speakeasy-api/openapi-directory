package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserAttributesRequest {
    public DeleteUserAttributesHeaders headers;
    public DeleteUserAttributesRequest withHeaders(DeleteUserAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserAttributesRequest request;
    public DeleteUserAttributesRequest withRequest(openapisdk.models.shared.DeleteUserAttributesRequest request) {
        this.request = request;
        return this;
    }
}