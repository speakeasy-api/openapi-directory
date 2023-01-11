package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMitigationActionRequest {
    public UpdateMitigationActionPathParams pathParams;
    public UpdateMitigationActionRequest withPathParams(UpdateMitigationActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateMitigationActionHeaders headers;
    public UpdateMitigationActionRequest withHeaders(UpdateMitigationActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMitigationActionRequestBody request;
    public UpdateMitigationActionRequest withRequest(UpdateMitigationActionRequestBody request) {
        this.request = request;
        return this;
    }
}