package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgPutRequest {
    public AppPkgPutPathParams pathParams;
    public AppPkgPutRequest withPathParams(AppPkgPutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/zip")
    public byte[] request;
    public AppPkgPutRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}