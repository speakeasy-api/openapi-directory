package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotifyAppValidationOutputRequest {
    public NotifyAppValidationOutputHeaders headers;
    public NotifyAppValidationOutputRequest withHeaders(NotifyAppValidationOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotifyAppValidationOutputRequest request;
    public NotifyAppValidationOutputRequest withRequest(openapisdk.models.shared.NotifyAppValidationOutputRequest request) {
        this.request = request;
        return this;
    }
}