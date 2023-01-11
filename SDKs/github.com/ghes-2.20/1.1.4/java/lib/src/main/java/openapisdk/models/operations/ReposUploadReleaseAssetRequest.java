package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUploadReleaseAssetRequest {
    public String serverURL;
    public ReposUploadReleaseAssetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ReposUploadReleaseAssetPathParams pathParams;
    public ReposUploadReleaseAssetRequest withPathParams(ReposUploadReleaseAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposUploadReleaseAssetQueryParams queryParams;
    public ReposUploadReleaseAssetRequest withQueryParams(ReposUploadReleaseAssetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public String request;
    public ReposUploadReleaseAssetRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}