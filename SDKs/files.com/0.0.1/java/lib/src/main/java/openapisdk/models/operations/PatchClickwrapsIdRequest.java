package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchClickwrapsIdRequest {
    public PatchClickwrapsIdPathParams pathParams;
    public PatchClickwrapsIdRequest withPathParams(PatchClickwrapsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchClickwrapsIdRequestBody request;
    public PatchClickwrapsIdRequest withRequest(PatchClickwrapsIdRequestBody request) {
        this.request = request;
        return this;
    }
}