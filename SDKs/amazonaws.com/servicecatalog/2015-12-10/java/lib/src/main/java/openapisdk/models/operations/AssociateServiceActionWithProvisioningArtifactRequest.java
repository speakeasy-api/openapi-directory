package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateServiceActionWithProvisioningArtifactRequest {
    public AssociateServiceActionWithProvisioningArtifactHeaders headers;
    public AssociateServiceActionWithProvisioningArtifactRequest withHeaders(AssociateServiceActionWithProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateServiceActionWithProvisioningArtifactInput request;
    public AssociateServiceActionWithProvisioningArtifactRequest withRequest(openapisdk.models.shared.AssociateServiceActionWithProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}