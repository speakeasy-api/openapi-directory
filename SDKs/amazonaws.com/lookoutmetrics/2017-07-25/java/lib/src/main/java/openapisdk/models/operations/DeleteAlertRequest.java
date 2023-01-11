package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlertRequest {
    public DeleteAlertHeaders headers;
    public DeleteAlertRequest withHeaders(DeleteAlertHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteAlertRequestBody request;
    public DeleteAlertRequest withRequest(DeleteAlertRequestBody request) {
        this.request = request;
        return this;
    }
}