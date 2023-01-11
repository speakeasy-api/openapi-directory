package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectModerationLabelsRequest {
    public DetectModerationLabelsHeaders headers;
    public DetectModerationLabelsRequest withHeaders(DetectModerationLabelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectModerationLabelsRequest request;
    public DetectModerationLabelsRequest withRequest(openapisdk.models.shared.DetectModerationLabelsRequest request) {
        this.request = request;
        return this;
    }
}