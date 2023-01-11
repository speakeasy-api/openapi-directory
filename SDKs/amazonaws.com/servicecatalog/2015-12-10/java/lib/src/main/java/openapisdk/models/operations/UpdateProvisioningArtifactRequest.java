package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProvisioningArtifactRequest {
    public UpdateProvisioningArtifactHeaders headers;
    public UpdateProvisioningArtifactRequest withHeaders(UpdateProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProvisioningArtifactInput request;
    public UpdateProvisioningArtifactRequest withRequest(openapisdk.models.shared.UpdateProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}