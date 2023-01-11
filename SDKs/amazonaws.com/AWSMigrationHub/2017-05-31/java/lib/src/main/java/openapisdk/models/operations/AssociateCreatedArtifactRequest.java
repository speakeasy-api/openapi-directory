package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateCreatedArtifactRequest {
    public AssociateCreatedArtifactHeaders headers;
    public AssociateCreatedArtifactRequest withHeaders(AssociateCreatedArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateCreatedArtifactRequest request;
    public AssociateCreatedArtifactRequest withRequest(openapisdk.models.shared.AssociateCreatedArtifactRequest request) {
        this.request = request;
        return this;
    }
}