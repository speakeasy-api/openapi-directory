package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyAccountRequest {
    public ModifyAccountHeaders headers;
    public ModifyAccountRequest withHeaders(ModifyAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyAccountRequest request;
    public ModifyAccountRequest withRequest(openapisdk.models.shared.ModifyAccountRequest request) {
        this.request = request;
        return this;
    }
}