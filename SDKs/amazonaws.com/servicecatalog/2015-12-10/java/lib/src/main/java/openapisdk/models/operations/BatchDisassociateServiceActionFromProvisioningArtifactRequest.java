package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateServiceActionFromProvisioningArtifactRequest {
    public BatchDisassociateServiceActionFromProvisioningArtifactHeaders headers;
    public BatchDisassociateServiceActionFromProvisioningArtifactRequest withHeaders(BatchDisassociateServiceActionFromProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDisassociateServiceActionFromProvisioningArtifactInput request;
    public BatchDisassociateServiceActionFromProvisioningArtifactRequest withRequest(openapisdk.models.shared.BatchDisassociateServiceActionFromProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}