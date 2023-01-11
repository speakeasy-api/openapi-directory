package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchRemoteServersIdRequest {
    public PatchRemoteServersIdPathParams pathParams;
    public PatchRemoteServersIdRequest withPathParams(PatchRemoteServersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchRemoteServersIdRequestBody request;
    public PatchRemoteServersIdRequest withRequest(PatchRemoteServersIdRequestBody request) {
        this.request = request;
        return this;
    }
}