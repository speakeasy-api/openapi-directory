package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeleteFileRequest {
    public ReposDeleteFilePathParams pathParams;
    public ReposDeleteFileRequest withPathParams(ReposDeleteFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposDeleteFileRequestBody request;
    public ReposDeleteFileRequest withRequest(ReposDeleteFileRequestBody request) {
        this.request = request;
        return this;
    }
}