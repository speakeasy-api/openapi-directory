package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPayoutAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostPayoutAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostPayoutAccountHolderSecurity security;
    public PostPayoutAccountHolderRequest withSecurity(PostPayoutAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}