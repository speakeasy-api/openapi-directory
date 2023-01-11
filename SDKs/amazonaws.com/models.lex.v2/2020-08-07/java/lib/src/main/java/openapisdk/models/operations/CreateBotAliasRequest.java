package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotAliasRequest {
    public CreateBotAliasPathParams pathParams;
    public CreateBotAliasRequest withPathParams(CreateBotAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBotAliasHeaders headers;
    public CreateBotAliasRequest withHeaders(CreateBotAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBotAliasRequestBody request;
    public CreateBotAliasRequest withRequest(CreateBotAliasRequestBody request) {
        this.request = request;
        return this;
    }
}