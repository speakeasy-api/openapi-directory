package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeysIdRequest {
    public PatchApiKeysIdPathParams pathParams;
    public PatchApiKeysIdRequest withPathParams(PatchApiKeysIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchApiKeysIdRequestBody request;
    public PatchApiKeysIdRequest withRequest(PatchApiKeysIdRequestBody request) {
        this.request = request;
        return this;
    }
}