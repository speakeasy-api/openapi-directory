package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchFileCommentsIdRequest {
    public PatchFileCommentsIdPathParams pathParams;
    public PatchFileCommentsIdRequest withPathParams(PatchFileCommentsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchFileCommentsIdRequestBody request;
    public PatchFileCommentsIdRequest withRequest(PatchFileCommentsIdRequestBody request) {
        this.request = request;
        return this;
    }
}