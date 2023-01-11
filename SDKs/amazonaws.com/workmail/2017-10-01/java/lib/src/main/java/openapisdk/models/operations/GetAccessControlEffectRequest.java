package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessControlEffectRequest {
    public GetAccessControlEffectHeaders headers;
    public GetAccessControlEffectRequest withHeaders(GetAccessControlEffectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAccessControlEffectRequest request;
    public GetAccessControlEffectRequest withRequest(openapisdk.models.shared.GetAccessControlEffectRequest request) {
        this.request = request;
        return this;
    }
}