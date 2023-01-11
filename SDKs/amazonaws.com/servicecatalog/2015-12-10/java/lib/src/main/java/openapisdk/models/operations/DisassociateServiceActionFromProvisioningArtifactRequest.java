package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateServiceActionFromProvisioningArtifactRequest {
    public DisassociateServiceActionFromProvisioningArtifactHeaders headers;
    public DisassociateServiceActionFromProvisioningArtifactRequest withHeaders(DisassociateServiceActionFromProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateServiceActionFromProvisioningArtifactInput request;
    public DisassociateServiceActionFromProvisioningArtifactRequest withRequest(openapisdk.models.shared.DisassociateServiceActionFromProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}