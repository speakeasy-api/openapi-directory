package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningArtifactRequest {
    public CreateProvisioningArtifactHeaders headers;
    public CreateProvisioningArtifactRequest withHeaders(CreateProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProvisioningArtifactInput request;
    public CreateProvisioningArtifactRequest withRequest(openapisdk.models.shared.CreateProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}