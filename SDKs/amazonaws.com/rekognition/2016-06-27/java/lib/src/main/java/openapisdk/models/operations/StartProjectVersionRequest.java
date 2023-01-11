package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartProjectVersionRequest {
    public StartProjectVersionHeaders headers;
    public StartProjectVersionRequest withHeaders(StartProjectVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartProjectVersionRequest request;
    public StartProjectVersionRequest withRequest(openapisdk.models.shared.StartProjectVersionRequest request) {
        this.request = request;
        return this;
    }
}