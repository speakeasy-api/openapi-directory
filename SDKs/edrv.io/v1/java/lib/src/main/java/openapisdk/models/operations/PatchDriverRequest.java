package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDriverRequest {
    public PatchDriverPathParams pathParams;
    public PatchDriverRequest withPathParams(PatchDriverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchDriverRequestBody request;
    public PatchDriverRequest withRequest(PatchDriverRequestBody request) {
        this.request = request;
        return this;
    }
}