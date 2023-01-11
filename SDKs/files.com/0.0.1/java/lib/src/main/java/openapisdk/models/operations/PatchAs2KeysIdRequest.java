package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAs2KeysIdRequest {
    public PatchAs2KeysIdPathParams pathParams;
    public PatchAs2KeysIdRequest withPathParams(PatchAs2KeysIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchAs2KeysIdRequestBody request;
    public PatchAs2KeysIdRequest withRequest(PatchAs2KeysIdRequestBody request) {
        this.request = request;
        return this;
    }
}