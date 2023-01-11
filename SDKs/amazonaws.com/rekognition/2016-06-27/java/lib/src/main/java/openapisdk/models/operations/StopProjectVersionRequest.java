package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopProjectVersionRequest {
    public StopProjectVersionHeaders headers;
    public StopProjectVersionRequest withHeaders(StopProjectVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopProjectVersionRequest request;
    public StopProjectVersionRequest withRequest(openapisdk.models.shared.StopProjectVersionRequest request) {
        this.request = request;
        return this;
    }
}