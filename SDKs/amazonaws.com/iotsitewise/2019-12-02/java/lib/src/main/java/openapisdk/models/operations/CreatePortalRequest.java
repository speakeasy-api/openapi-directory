package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePortalRequest {
    public CreatePortalHeaders headers;
    public CreatePortalRequest withHeaders(CreatePortalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePortalRequestBody request;
    public CreatePortalRequest withRequest(CreatePortalRequestBody request) {
        this.request = request;
        return this;
    }
}