package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIdentityPoolRequest {
    public UpdateIdentityPoolHeaders headers;
    public UpdateIdentityPoolRequest withHeaders(UpdateIdentityPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentityPool request;
    public UpdateIdentityPoolRequest withRequest(openapisdk.models.shared.IdentityPool request) {
        this.request = request;
        return this;
    }
}