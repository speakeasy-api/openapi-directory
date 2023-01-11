package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactVersionMetaDataRequest {
    public UpdateArtifactVersionMetaDataPathParams pathParams;
    public UpdateArtifactVersionMetaDataRequest withPathParams(UpdateArtifactVersionMetaDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditableMetaData request;
    public UpdateArtifactVersionMetaDataRequest withRequest(openapisdk.models.shared.EditableMetaData request) {
        this.request = request;
        return this;
    }
}