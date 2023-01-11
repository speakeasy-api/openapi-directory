package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateServiceActionWithProvisioningArtifactRequest {
    public BatchAssociateServiceActionWithProvisioningArtifactHeaders headers;
    public BatchAssociateServiceActionWithProvisioningArtifactRequest withHeaders(BatchAssociateServiceActionWithProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchAssociateServiceActionWithProvisioningArtifactInput request;
    public BatchAssociateServiceActionWithProvisioningArtifactRequest withRequest(openapisdk.models.shared.BatchAssociateServiceActionWithProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}