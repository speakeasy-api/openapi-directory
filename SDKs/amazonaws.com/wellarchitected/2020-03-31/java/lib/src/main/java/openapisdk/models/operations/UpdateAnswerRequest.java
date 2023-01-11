package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnswerRequest {
    public UpdateAnswerPathParams pathParams;
    public UpdateAnswerRequest withPathParams(UpdateAnswerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAnswerHeaders headers;
    public UpdateAnswerRequest withHeaders(UpdateAnswerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAnswerRequestBody request;
    public UpdateAnswerRequest withRequest(UpdateAnswerRequestBody request) {
        this.request = request;
        return this;
    }
}