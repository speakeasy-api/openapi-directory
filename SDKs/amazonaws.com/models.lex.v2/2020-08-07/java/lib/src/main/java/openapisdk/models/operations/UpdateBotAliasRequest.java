package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBotAliasRequest {
    public UpdateBotAliasPathParams pathParams;
    public UpdateBotAliasRequest withPathParams(UpdateBotAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBotAliasHeaders headers;
    public UpdateBotAliasRequest withHeaders(UpdateBotAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBotAliasRequestBody request;
    public UpdateBotAliasRequest withRequest(UpdateBotAliasRequestBody request) {
        this.request = request;
        return this;
    }
}