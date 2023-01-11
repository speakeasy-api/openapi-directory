package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShareByIdRequest {
    public UpdateShareByIdPathParams pathParams;
    public UpdateShareByIdRequest withPathParams(UpdateShareByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateShareByIdHeaders headers;
    public UpdateShareByIdRequest withHeaders(UpdateShareByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateShareByIdUpdateShareRequestBody request;
    public UpdateShareByIdRequest withRequest(UpdateShareByIdUpdateShareRequestBody request) {
        this.request = request;
        return this;
    }
}