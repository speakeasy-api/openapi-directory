package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailListByIdRequest {
    public UpdateEmailListByIdPathParams pathParams;
    public UpdateEmailListByIdRequest withPathParams(UpdateEmailListByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEmailListByIdHeaders headers;
    public UpdateEmailListByIdRequest withHeaders(UpdateEmailListByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEmailListByIdUpdateEmailListRequestBody request;
    public UpdateEmailListByIdRequest withRequest(UpdateEmailListByIdUpdateEmailListRequestBody request) {
        this.request = request;
        return this;
    }
}