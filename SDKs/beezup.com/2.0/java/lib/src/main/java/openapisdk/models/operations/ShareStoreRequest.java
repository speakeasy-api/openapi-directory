package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShareStoreRequest {
    public ShareStorePathParams pathParams;
    public ShareStoreRequest withPathParams(ShareStorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public ShareStoreRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}