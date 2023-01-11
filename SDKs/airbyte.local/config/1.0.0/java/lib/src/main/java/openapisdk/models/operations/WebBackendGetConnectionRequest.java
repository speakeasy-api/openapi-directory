package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendGetConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebBackendConnectionRequestBody request;
    public WebBackendGetConnectionRequest withRequest(openapisdk.models.shared.WebBackendConnectionRequestBody request) {
        this.request = request;
        return this;
    }
}