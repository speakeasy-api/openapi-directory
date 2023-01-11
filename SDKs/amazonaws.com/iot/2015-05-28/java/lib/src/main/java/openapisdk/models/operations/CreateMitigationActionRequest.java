package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMitigationActionRequest {
    public CreateMitigationActionPathParams pathParams;
    public CreateMitigationActionRequest withPathParams(CreateMitigationActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateMitigationActionHeaders headers;
    public CreateMitigationActionRequest withHeaders(CreateMitigationActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMitigationActionRequestBody request;
    public CreateMitigationActionRequest withRequest(CreateMitigationActionRequestBody request) {
        this.request = request;
        return this;
    }
}