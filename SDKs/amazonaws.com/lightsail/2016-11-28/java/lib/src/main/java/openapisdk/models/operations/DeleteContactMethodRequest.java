package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContactMethodRequest {
    public DeleteContactMethodHeaders headers;
    public DeleteContactMethodRequest withHeaders(DeleteContactMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContactMethodRequest request;
    public DeleteContactMethodRequest withRequest(openapisdk.models.shared.DeleteContactMethodRequest request) {
        this.request = request;
        return this;
    }
}