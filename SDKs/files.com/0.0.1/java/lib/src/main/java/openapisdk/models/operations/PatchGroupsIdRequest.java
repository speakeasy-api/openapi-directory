package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsIdRequest {
    public PatchGroupsIdPathParams pathParams;
    public PatchGroupsIdRequest withPathParams(PatchGroupsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchGroupsIdRequestBody request;
    public PatchGroupsIdRequest withRequest(PatchGroupsIdRequestBody request) {
        this.request = request;
        return this;
    }
}