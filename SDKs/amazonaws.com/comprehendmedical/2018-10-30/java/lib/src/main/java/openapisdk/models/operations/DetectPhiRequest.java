package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectPhiRequest {
    public DetectPhiHeaders headers;
    public DetectPhiRequest withHeaders(DetectPhiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectPhiRequest request;
    public DetectPhiRequest withRequest(openapisdk.models.shared.DetectPhiRequest request) {
        this.request = request;
        return this;
    }
}