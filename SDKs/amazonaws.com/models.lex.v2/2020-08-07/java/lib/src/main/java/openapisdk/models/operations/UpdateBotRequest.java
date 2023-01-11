package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBotRequest {
    public UpdateBotPathParams pathParams;
    public UpdateBotRequest withPathParams(UpdateBotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBotHeaders headers;
    public UpdateBotRequest withHeaders(UpdateBotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBotRequestBody request;
    public UpdateBotRequest withRequest(UpdateBotRequestBody request) {
        this.request = request;
        return this;
    }
}