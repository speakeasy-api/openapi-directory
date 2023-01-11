package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClassificationJobRequest {
    public UpdateClassificationJobPathParams pathParams;
    public UpdateClassificationJobRequest withPathParams(UpdateClassificationJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateClassificationJobHeaders headers;
    public UpdateClassificationJobRequest withHeaders(UpdateClassificationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateClassificationJobRequestBody request;
    public UpdateClassificationJobRequest withRequest(UpdateClassificationJobRequestBody request) {
        this.request = request;
        return this;
    }
}