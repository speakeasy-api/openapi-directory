package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotifyWorkersRequest {
    public NotifyWorkersHeaders headers;
    public NotifyWorkersRequest withHeaders(NotifyWorkersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotifyWorkersRequest request;
    public NotifyWorkersRequest withRequest(openapisdk.models.shared.NotifyWorkersRequest request) {
        this.request = request;
        return this;
    }
}