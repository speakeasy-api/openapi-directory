package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBotLocaleRequest {
    public UpdateBotLocalePathParams pathParams;
    public UpdateBotLocaleRequest withPathParams(UpdateBotLocalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBotLocaleHeaders headers;
    public UpdateBotLocaleRequest withHeaders(UpdateBotLocaleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBotLocaleRequestBody request;
    public UpdateBotLocaleRequest withRequest(UpdateBotLocaleRequestBody request) {
        this.request = request;
        return this;
    }
}