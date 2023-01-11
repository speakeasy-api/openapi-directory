package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountRequest {
    public UpdateAccountHeaders headers;
    public UpdateAccountRequest withHeaders(UpdateAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAccountUpdateAccountRequestBody request;
    public UpdateAccountRequest withRequest(UpdateAccountUpdateAccountRequestBody request) {
        this.request = request;
        return this;
    }
}