package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotLocaleRequest {
    public CreateBotLocalePathParams pathParams;
    public CreateBotLocaleRequest withPathParams(CreateBotLocalePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBotLocaleHeaders headers;
    public CreateBotLocaleRequest withHeaders(CreateBotLocaleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBotLocaleRequestBody request;
    public CreateBotLocaleRequest withRequest(CreateBotLocaleRequestBody request) {
        this.request = request;
        return this;
    }
}