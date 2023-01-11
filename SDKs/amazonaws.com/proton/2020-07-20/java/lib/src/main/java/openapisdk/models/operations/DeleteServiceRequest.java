package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceRequest {
    public DeleteServiceHeaders headers;
    public DeleteServiceRequest withHeaders(DeleteServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServiceInput request;
    public DeleteServiceRequest withRequest(openapisdk.models.shared.DeleteServiceInput request) {
        this.request = request;
        return this;
    }
}