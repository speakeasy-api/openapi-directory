package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFaceSearchRequest {
    public StartFaceSearchHeaders headers;
    public StartFaceSearchRequest withHeaders(StartFaceSearchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFaceSearchRequest request;
    public StartFaceSearchRequest withRequest(openapisdk.models.shared.StartFaceSearchRequest request) {
        this.request = request;
        return this;
    }
}