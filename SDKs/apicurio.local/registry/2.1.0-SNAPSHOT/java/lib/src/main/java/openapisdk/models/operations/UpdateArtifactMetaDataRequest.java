package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactMetaDataRequest {
    public UpdateArtifactMetaDataPathParams pathParams;
    public UpdateArtifactMetaDataRequest withPathParams(UpdateArtifactMetaDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditableMetaData request;
    public UpdateArtifactMetaDataRequest withRequest(openapisdk.models.shared.EditableMetaData request) {
        this.request = request;
        return this;
    }
}