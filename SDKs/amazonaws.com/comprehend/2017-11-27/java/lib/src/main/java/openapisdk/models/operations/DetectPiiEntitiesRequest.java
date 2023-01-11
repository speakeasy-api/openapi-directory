package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectPiiEntitiesRequest {
    public DetectPiiEntitiesHeaders headers;
    public DetectPiiEntitiesRequest withHeaders(DetectPiiEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectPiiEntitiesRequest request;
    public DetectPiiEntitiesRequest withRequest(openapisdk.models.shared.DetectPiiEntitiesRequest request) {
        this.request = request;
        return this;
    }
}