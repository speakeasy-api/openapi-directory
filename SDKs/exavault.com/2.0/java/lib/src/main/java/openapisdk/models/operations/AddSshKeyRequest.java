package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSshKeyRequest {
    public AddSshKeyHeaders headers;
    public AddSshKeyRequest withHeaders(AddSshKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddSshKeyAddSshKeyRequestBody request;
    public AddSshKeyRequest withRequest(AddSshKeyAddSshKeyRequestBody request) {
        this.request = request;
        return this;
    }
}