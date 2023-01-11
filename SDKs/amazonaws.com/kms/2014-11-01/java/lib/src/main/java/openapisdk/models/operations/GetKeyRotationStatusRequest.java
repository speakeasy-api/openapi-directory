package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyRotationStatusRequest {
    public GetKeyRotationStatusHeaders headers;
    public GetKeyRotationStatusRequest withHeaders(GetKeyRotationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetKeyRotationStatusRequest request;
    public GetKeyRotationStatusRequest withRequest(openapisdk.models.shared.GetKeyRotationStatusRequest request) {
        this.request = request;
        return this;
    }
}