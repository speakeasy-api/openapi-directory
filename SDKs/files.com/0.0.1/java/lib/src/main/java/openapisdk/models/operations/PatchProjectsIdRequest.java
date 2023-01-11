package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProjectsIdRequest {
    public PatchProjectsIdPathParams pathParams;
    public PatchProjectsIdRequest withPathParams(PatchProjectsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchProjectsIdRequestBody request;
    public PatchProjectsIdRequest withRequest(PatchProjectsIdRequestBody request) {
        this.request = request;
        return this;
    }
}