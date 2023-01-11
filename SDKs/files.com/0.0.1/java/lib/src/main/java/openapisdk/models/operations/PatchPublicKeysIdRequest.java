package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPublicKeysIdRequest {
    public PatchPublicKeysIdPathParams pathParams;
    public PatchPublicKeysIdRequest withPathParams(PatchPublicKeysIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchPublicKeysIdRequestBody request;
    public PatchPublicKeysIdRequest withRequest(PatchPublicKeysIdRequestBody request) {
        this.request = request;
        return this;
    }
}