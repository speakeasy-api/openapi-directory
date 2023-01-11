package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisioningArtifactRequest {
    public DeleteProvisioningArtifactHeaders headers;
    public DeleteProvisioningArtifactRequest withHeaders(DeleteProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProvisioningArtifactInput request;
    public DeleteProvisioningArtifactRequest withRequest(openapisdk.models.shared.DeleteProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}