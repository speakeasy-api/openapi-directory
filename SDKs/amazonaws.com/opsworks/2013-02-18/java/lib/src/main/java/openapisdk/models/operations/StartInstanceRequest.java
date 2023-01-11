package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartInstanceRequest {
    public StartInstanceHeaders headers;
    public StartInstanceRequest withHeaders(StartInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartInstanceRequest request;
    public StartInstanceRequest withRequest(openapisdk.models.shared.StartInstanceRequest request) {
        this.request = request;
        return this;
    }
}