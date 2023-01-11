package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlertRequest {
    public CreateAlertHeaders headers;
    public CreateAlertRequest withHeaders(CreateAlertHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAlertRequestBody request;
    public CreateAlertRequest withRequest(CreateAlertRequestBody request) {
        this.request = request;
        return this;
    }
}