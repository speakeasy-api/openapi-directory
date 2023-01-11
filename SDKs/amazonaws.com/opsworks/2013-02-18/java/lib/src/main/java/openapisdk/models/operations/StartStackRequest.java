package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStackRequest {
    public StartStackHeaders headers;
    public StartStackRequest withHeaders(StartStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartStackRequest request;
    public StartStackRequest withRequest(openapisdk.models.shared.StartStackRequest request) {
        this.request = request;
        return this;
    }
}