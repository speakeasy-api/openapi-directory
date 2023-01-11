package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchStylesPathRequest {
    public PatchStylesPathPathParams pathParams;
    public PatchStylesPathRequest withPathParams(PatchStylesPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchStylesPathRequestBody request;
    public PatchStylesPathRequest withRequest(PatchStylesPathRequestBody request) {
        this.request = request;
        return this;
    }
}