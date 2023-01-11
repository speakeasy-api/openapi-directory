package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendRecreateDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationRecreate request;
    public WebBackendRecreateDestinationRequest withRequest(openapisdk.models.shared.DestinationRecreate request) {
        this.request = request;
        return this;
    }
}