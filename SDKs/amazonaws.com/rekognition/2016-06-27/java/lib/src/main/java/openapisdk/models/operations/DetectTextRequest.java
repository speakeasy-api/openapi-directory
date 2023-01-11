package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectTextRequest {
    public DetectTextHeaders headers;
    public DetectTextRequest withHeaders(DetectTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectTextRequest request;
    public DetectTextRequest withRequest(openapisdk.models.shared.DetectTextRequest request) {
        this.request = request;
        return this;
    }
}