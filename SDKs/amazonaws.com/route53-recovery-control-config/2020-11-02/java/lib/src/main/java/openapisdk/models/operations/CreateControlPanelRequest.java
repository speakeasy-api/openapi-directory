package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateControlPanelRequest {
    public CreateControlPanelHeaders headers;
    public CreateControlPanelRequest withHeaders(CreateControlPanelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateControlPanelRequestBody request;
    public CreateControlPanelRequest withRequest(CreateControlPanelRequestBody request) {
        this.request = request;
        return this;
    }
}