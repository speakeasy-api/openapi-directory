package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMlTransformRequest {
    public UpdateMlTransformHeaders headers;
    public UpdateMlTransformRequest withHeaders(UpdateMlTransformHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMlTransformRequest request;
    public UpdateMlTransformRequest withRequest(openapisdk.models.shared.UpdateMlTransformRequest request) {
        this.request = request;
        return this;
    }
}