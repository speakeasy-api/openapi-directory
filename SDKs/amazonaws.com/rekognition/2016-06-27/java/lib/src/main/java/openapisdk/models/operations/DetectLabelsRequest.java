package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectLabelsRequest {
    public DetectLabelsHeaders headers;
    public DetectLabelsRequest withHeaders(DetectLabelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectLabelsRequest request;
    public DetectLabelsRequest withRequest(openapisdk.models.shared.DetectLabelsRequest request) {
        this.request = request;
        return this;
    }
}