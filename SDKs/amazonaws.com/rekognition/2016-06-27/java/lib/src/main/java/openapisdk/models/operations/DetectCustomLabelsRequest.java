package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectCustomLabelsRequest {
    public DetectCustomLabelsHeaders headers;
    public DetectCustomLabelsRequest withHeaders(DetectCustomLabelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectCustomLabelsRequest request;
    public DetectCustomLabelsRequest withRequest(openapisdk.models.shared.DetectCustomLabelsRequest request) {
        this.request = request;
        return this;
    }
}