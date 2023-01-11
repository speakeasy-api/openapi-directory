package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubnetChangeProtectionRequest {
    public UpdateSubnetChangeProtectionHeaders headers;
    public UpdateSubnetChangeProtectionRequest withHeaders(UpdateSubnetChangeProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSubnetChangeProtectionRequest request;
    public UpdateSubnetChangeProtectionRequest withRequest(openapisdk.models.shared.UpdateSubnetChangeProtectionRequest request) {
        this.request = request;
        return this;
    }
}