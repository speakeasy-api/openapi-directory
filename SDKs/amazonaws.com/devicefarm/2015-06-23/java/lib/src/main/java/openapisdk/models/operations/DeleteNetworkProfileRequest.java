package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkProfileRequest {
    public DeleteNetworkProfileHeaders headers;
    public DeleteNetworkProfileRequest withHeaders(DeleteNetworkProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteNetworkProfileRequest request;
    public DeleteNetworkProfileRequest withRequest(openapisdk.models.shared.DeleteNetworkProfileRequest request) {
        this.request = request;
        return this;
    }
}