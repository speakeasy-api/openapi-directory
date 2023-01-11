package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInstanceCustomHealthStatusRequest {
    public UpdateInstanceCustomHealthStatusHeaders headers;
    public UpdateInstanceCustomHealthStatusRequest withHeaders(UpdateInstanceCustomHealthStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceCustomHealthStatusRequest request;
    public UpdateInstanceCustomHealthStatusRequest withRequest(openapisdk.models.shared.UpdateInstanceCustomHealthStatusRequest request) {
        this.request = request;
        return this;
    }
}