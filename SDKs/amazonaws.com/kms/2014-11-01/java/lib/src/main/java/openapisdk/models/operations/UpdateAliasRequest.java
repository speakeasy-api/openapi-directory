package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAliasRequest {
    public UpdateAliasHeaders headers;
    public UpdateAliasRequest withHeaders(UpdateAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAliasRequest request;
    public UpdateAliasRequest withRequest(openapisdk.models.shared.UpdateAliasRequest request) {
        this.request = request;
        return this;
    }
}