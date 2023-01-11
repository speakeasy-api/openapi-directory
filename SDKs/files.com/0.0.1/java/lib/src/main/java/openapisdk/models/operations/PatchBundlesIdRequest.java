package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBundlesIdRequest {
    public PatchBundlesIdPathParams pathParams;
    public PatchBundlesIdRequest withPathParams(PatchBundlesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchBundlesIdRequestBody request;
    public PatchBundlesIdRequest withRequest(PatchBundlesIdRequestBody request) {
        this.request = request;
        return this;
    }
}