package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendUpdateConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebBackendConnectionUpdate request;
    public WebBackendUpdateConnectionRequest withRequest(openapisdk.models.shared.WebBackendConnectionUpdate request) {
        this.request = request;
        return this;
    }
}