package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAliasRequest {
    public CreateAliasHeaders headers;
    public CreateAliasRequest withHeaders(CreateAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAliasInput request;
    public CreateAliasRequest withRequest(openapisdk.models.shared.CreateAliasInput request) {
        this.request = request;
        return this;
    }
}