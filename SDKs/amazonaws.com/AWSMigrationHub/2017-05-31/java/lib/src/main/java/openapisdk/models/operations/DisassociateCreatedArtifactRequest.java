package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateCreatedArtifactRequest {
    public DisassociateCreatedArtifactHeaders headers;
    public DisassociateCreatedArtifactRequest withHeaders(DisassociateCreatedArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateCreatedArtifactRequest request;
    public DisassociateCreatedArtifactRequest withRequest(openapisdk.models.shared.DisassociateCreatedArtifactRequest request) {
        this.request = request;
        return this;
    }
}