package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHapgRequest {
    public DeleteHapgHeaders headers;
    public DeleteHapgRequest withHeaders(DeleteHapgHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteHapgRequest request;
    public DeleteHapgRequest withRequest(openapisdk.models.shared.DeleteHapgRequest request) {
        this.request = request;
        return this;
    }
}