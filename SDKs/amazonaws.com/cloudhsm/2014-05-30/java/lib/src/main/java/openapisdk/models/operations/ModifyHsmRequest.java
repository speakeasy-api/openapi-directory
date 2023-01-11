package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyHsmRequest {
    public ModifyHsmHeaders headers;
    public ModifyHsmRequest withHeaders(ModifyHsmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyHsmRequest request;
    public ModifyHsmRequest withRequest(openapisdk.models.shared.ModifyHsmRequest request) {
        this.request = request;
        return this;
    }
}