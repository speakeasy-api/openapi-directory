package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyHapgRequest {
    public ModifyHapgHeaders headers;
    public ModifyHapgRequest withHeaders(ModifyHapgHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyHapgRequest request;
    public ModifyHapgRequest withRequest(openapisdk.models.shared.ModifyHapgRequest request) {
        this.request = request;
        return this;
    }
}