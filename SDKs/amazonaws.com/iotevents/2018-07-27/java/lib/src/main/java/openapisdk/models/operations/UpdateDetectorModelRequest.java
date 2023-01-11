package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDetectorModelRequest {
    public UpdateDetectorModelPathParams pathParams;
    public UpdateDetectorModelRequest withPathParams(UpdateDetectorModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDetectorModelHeaders headers;
    public UpdateDetectorModelRequest withHeaders(UpdateDetectorModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDetectorModelRequestBody request;
    public UpdateDetectorModelRequest withRequest(UpdateDetectorModelRequestBody request) {
        this.request = request;
        return this;
    }
}