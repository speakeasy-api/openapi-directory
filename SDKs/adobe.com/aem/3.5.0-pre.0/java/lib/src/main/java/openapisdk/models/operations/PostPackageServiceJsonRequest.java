package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageServiceJsonRequest {
    public PostPackageServiceJsonPathParams pathParams;
    public PostPackageServiceJsonRequest withPathParams(PostPackageServiceJsonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPackageServiceJsonQueryParams queryParams;
    public PostPackageServiceJsonRequest withQueryParams(PostPackageServiceJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostPackageServiceJsonRequestBody request;
    public PostPackageServiceJsonRequest withRequest(PostPackageServiceJsonRequestBody request) {
        this.request = request;
        return this;
    }
}