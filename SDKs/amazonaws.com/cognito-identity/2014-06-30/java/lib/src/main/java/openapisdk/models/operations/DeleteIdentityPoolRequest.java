package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIdentityPoolRequest {
    public DeleteIdentityPoolHeaders headers;
    public DeleteIdentityPoolRequest withHeaders(DeleteIdentityPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteIdentityPoolInput request;
    public DeleteIdentityPoolRequest withRequest(openapisdk.models.shared.DeleteIdentityPoolInput request) {
        this.request = request;
        return this;
    }
}