package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyClientPropertiesRequest {
    public ModifyClientPropertiesHeaders headers;
    public ModifyClientPropertiesRequest withHeaders(ModifyClientPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyClientPropertiesRequest request;
    public ModifyClientPropertiesRequest withRequest(openapisdk.models.shared.ModifyClientPropertiesRequest request) {
        this.request = request;
        return this;
    }
}