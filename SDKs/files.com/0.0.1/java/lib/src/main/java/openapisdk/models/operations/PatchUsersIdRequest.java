package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersIdRequest {
    public PatchUsersIdPathParams pathParams;
    public PatchUsersIdRequest withPathParams(PatchUsersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchUsersIdRequestBody request;
    public PatchUsersIdRequest withRequest(PatchUsersIdRequestBody request) {
        this.request = request;
        return this;
    }
}