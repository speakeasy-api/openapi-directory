package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActivityOnQueueRequest {
    public UpdateActivityOnQueueHeaders headers;
    public UpdateActivityOnQueueRequest withHeaders(UpdateActivityOnQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateActivityRequest request;
    public UpdateActivityOnQueueRequest withRequest(openapisdk.models.shared.UpdateActivityRequest request) {
        this.request = request;
        return this;
    }
}