package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchFilesPathRequest {
    public PatchFilesPathPathParams pathParams;
    public PatchFilesPathRequest withPathParams(PatchFilesPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchFilesPathRequestBody request;
    public PatchFilesPathRequest withRequest(PatchFilesPathRequestBody request) {
        this.request = request;
        return this;
    }
}