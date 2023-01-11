package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBehaviorsIdRequest {
    public PatchBehaviorsIdPathParams pathParams;
    public PatchBehaviorsIdRequest withPathParams(PatchBehaviorsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchBehaviorsIdRequestBody request;
    public PatchBehaviorsIdRequest withRequest(PatchBehaviorsIdRequestBody request) {
        this.request = request;
        return this;
    }
}