package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAliasRequest {
    public CreateAliasPathParams pathParams;
    public CreateAliasRequest withPathParams(CreateAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateAliasHeaders headers;
    public CreateAliasRequest withHeaders(CreateAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAliasRequestBody request;
    public CreateAliasRequest withRequest(CreateAliasRequestBody request) {
        this.request = request;
        return this;
    }
}