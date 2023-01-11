package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFormByIdRequest {
    public UpdateFormByIdPathParams pathParams;
    public UpdateFormByIdRequest withPathParams(UpdateFormByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFormByIdHeaders headers;
    public UpdateFormByIdRequest withHeaders(UpdateFormByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFormByIdUpdateFormByIdRequestBody request;
    public UpdateFormByIdRequest withRequest(UpdateFormByIdUpdateFormByIdRequestBody request) {
        this.request = request;
        return this;
    }
}