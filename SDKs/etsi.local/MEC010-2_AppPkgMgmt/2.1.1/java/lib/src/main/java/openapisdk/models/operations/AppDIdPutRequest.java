package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppDIdPutRequest {
    public AppDIdPutPathParams pathParams;
    public AppDIdPutRequest withPathParams(AppDIdPutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/zip")
    public byte[] request;
    public AppDIdPutRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}