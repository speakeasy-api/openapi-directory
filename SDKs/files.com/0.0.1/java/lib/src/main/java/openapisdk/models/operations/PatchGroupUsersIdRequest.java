package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupUsersIdRequest {
    public PatchGroupUsersIdPathParams pathParams;
    public PatchGroupUsersIdRequest withPathParams(PatchGroupUsersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchGroupUsersIdRequestBody request;
    public PatchGroupUsersIdRequest withRequest(PatchGroupUsersIdRequestBody request) {
        this.request = request;
        return this;
    }
}