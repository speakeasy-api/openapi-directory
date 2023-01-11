package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNotifyShopperRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostNotifyShopperRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostNotifyShopperSecurity security;
    public PostNotifyShopperRequest withSecurity(PostNotifyShopperSecurity security) {
        this.security = security;
        return this;
    }
}