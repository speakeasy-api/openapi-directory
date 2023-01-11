package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInstanceProfileRequest {
    public DeleteInstanceProfileHeaders headers;
    public DeleteInstanceProfileRequest withHeaders(DeleteInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInstanceProfileRequest request;
    public DeleteInstanceProfileRequest withRequest(openapisdk.models.shared.DeleteInstanceProfileRequest request) {
        this.request = request;
        return this;
    }
}