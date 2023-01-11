package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDetectorModelRequest {
    public CreateDetectorModelHeaders headers;
    public CreateDetectorModelRequest withHeaders(CreateDetectorModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDetectorModelRequestBody request;
    public CreateDetectorModelRequest withRequest(CreateDetectorModelRequestBody request) {
        this.request = request;
        return this;
    }
}