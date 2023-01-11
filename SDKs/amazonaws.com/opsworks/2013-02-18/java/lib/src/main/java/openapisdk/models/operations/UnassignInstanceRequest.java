package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignInstanceRequest {
    public UnassignInstanceHeaders headers;
    public UnassignInstanceRequest withHeaders(UnassignInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnassignInstanceRequest request;
    public UnassignInstanceRequest withRequest(openapisdk.models.shared.UnassignInstanceRequest request) {
        this.request = request;
        return this;
    }
}