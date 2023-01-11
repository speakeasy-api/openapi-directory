package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateControlPanelRequest {
    public UpdateControlPanelHeaders headers;
    public UpdateControlPanelRequest withHeaders(UpdateControlPanelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateControlPanelRequestBody request;
    public UpdateControlPanelRequest withRequest(UpdateControlPanelRequestBody request) {
        this.request = request;
        return this;
    }
}