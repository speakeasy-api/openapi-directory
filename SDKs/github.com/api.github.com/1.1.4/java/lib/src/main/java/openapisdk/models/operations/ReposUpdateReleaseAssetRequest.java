package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateReleaseAssetRequest {
    public ReposUpdateReleaseAssetPathParams pathParams;
    public ReposUpdateReleaseAssetRequest withPathParams(ReposUpdateReleaseAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateReleaseAssetRequestBody request;
    public ReposUpdateReleaseAssetRequest withRequest(ReposUpdateReleaseAssetRequestBody request) {
        this.request = request;
        return this;
    }
}