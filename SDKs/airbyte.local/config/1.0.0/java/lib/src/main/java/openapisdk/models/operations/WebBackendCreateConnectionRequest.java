package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendCreateConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebBackendConnectionCreate request;
    public WebBackendCreateConnectionRequest withRequest(openapisdk.models.shared.WebBackendConnectionCreate request) {
        this.request = request;
        return this;
    }
}