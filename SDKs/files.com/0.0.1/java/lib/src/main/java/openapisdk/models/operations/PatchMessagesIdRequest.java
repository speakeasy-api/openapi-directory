package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMessagesIdRequest {
    public PatchMessagesIdPathParams pathParams;
    public PatchMessagesIdRequest withPathParams(PatchMessagesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchMessagesIdRequestBody request;
    public PatchMessagesIdRequest withRequest(PatchMessagesIdRequestBody request) {
        this.request = request;
        return this;
    }
}