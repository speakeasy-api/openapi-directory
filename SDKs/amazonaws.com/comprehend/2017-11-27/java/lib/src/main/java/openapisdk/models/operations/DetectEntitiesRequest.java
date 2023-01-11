package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectEntitiesRequest {
    public DetectEntitiesHeaders headers;
    public DetectEntitiesRequest withHeaders(DetectEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectEntitiesRequest request;
    public DetectEntitiesRequest withRequest(openapisdk.models.shared.DetectEntitiesRequest request) {
        this.request = request;
        return this;
    }
}