package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHsmRequest {
    public DeleteHsmHeaders headers;
    public DeleteHsmRequest withHeaders(DeleteHsmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteHsmRequest request;
    public DeleteHsmRequest withRequest(openapisdk.models.shared.DeleteHsmRequest request) {
        this.request = request;
        return this;
    }
}