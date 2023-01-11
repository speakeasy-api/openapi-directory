package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyLunaClientRequest {
    public ModifyLunaClientHeaders headers;
    public ModifyLunaClientRequest withHeaders(ModifyLunaClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyLunaClientRequest request;
    public ModifyLunaClientRequest withRequest(openapisdk.models.shared.ModifyLunaClientRequest request) {
        this.request = request;
        return this;
    }
}