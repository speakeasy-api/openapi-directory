package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartApplicationRequest {
    public StartApplicationHeaders headers;
    public StartApplicationRequest withHeaders(StartApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartApplicationRequest request;
    public StartApplicationRequest withRequest(openapisdk.models.shared.StartApplicationRequest request) {
        this.request = request;
        return this;
    }
}